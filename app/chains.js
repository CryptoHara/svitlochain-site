// Multi-chain address derivation for the Svitlo web wallet.
// Plain globals (no modules), loaded via <script src="chains.js"> right
// after <script src="svit-noble.js">. All derive*Address(mnemonic)
// functions take the raw BIP39 mnemonic phrase and return a display
// address string. Ported line-for-line from platforma/mobile/src/crypto/
// {btc,litecoin,dogecoin,xrp,solana,cosmos,polkadot,near,tron}.ts, with
// ethers.js swapped for svitNoble's secp256k1/HDKey/ed25519 and the
// hand-rolled SLIP-0010 kept as-is (ed25519 has no non-hardened case, so
// there's nothing an HD library buys over the ~15-line reference algorithm).

(function () {
  'use strict';
  const N = window.svitNoble;

  // ── shared byte/hex helpers ────────────────────────────────────────────
  function be32(n) {
    const b = new Uint8Array(4);
    b[0] = (n >>> 24) & 0xff; b[1] = (n >>> 16) & 0xff;
    b[2] = (n >>> 8) & 0xff;  b[3] = n & 0xff;
    return b;
  }
  function concat(...arrs) {
    const len = arrs.reduce((s, a) => s + a.length, 0);
    const out = new Uint8Array(len);
    let o = 0;
    for (const a of arrs) { out.set(a, o); o += a.length; }
    return out;
  }

  // ── base58 (Bitcoin alphabet) ──────────────────────────────────────────
  const B58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

  function base58Encode(buf) {
    let x = 0n;
    for (const b of buf) x = x * 256n + BigInt(b);
    let result = '';
    while (x > 0n) { result = B58[Number(x % 58n)] + result; x /= 58n; }
    for (const b of buf) { if (b !== 0) break; result = '1' + result; }
    return result || '1';
  }

  function base58Decode(str) {
    let x = 0n;
    for (const c of str) {
      const v = B58.indexOf(c);
      if (v < 0) throw new Error('invalid base58 char');
      x = x * 58n + BigInt(v);
    }
    let bytes = [];
    while (x > 0n) { bytes.unshift(Number(x % 256n)); x /= 256n; }
    for (const c of str) { if (c !== '1') break; bytes.unshift(0); }
    return new Uint8Array(bytes);
  }

  function base58checkEncode(version, payload) {
    const versioned = concat(new Uint8Array([version]), payload);
    const checksum = N.sha256(N.sha256(versioned)).slice(0, 4);
    return base58Encode(concat(versioned, checksum));
  }

  function base58checkDecode(str) {
    const full = base58Decode(str);
    if (full.length < 5) throw new Error('too short');
    const versioned = full.slice(0, full.length - 4);
    const checksum = full.slice(full.length - 4);
    const expect = N.sha256(N.sha256(versioned)).slice(0, 4);
    for (let i = 0; i < 4; i++) if (checksum[i] !== expect[i]) throw new Error('bad checksum');
    return { version: versioned[0], payload: versioned.slice(1) };
  }

  // ── Ripple's own base58 alphabet + base58check ─────────────────────────
  const RIPPLE_B58 = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';

  function rippleBase58Encode(buf) {
    let x = 0n;
    for (const b of buf) x = x * 256n + BigInt(b);
    let result = '';
    while (x > 0n) { result = RIPPLE_B58[Number(x % 58n)] + result; x /= 58n; }
    for (const b of buf) { if (b !== 0) break; result = RIPPLE_B58[0] + result; }
    return result || RIPPLE_B58[0];
  }

  function rippleBase58CheckEncode(version, payload) {
    const versioned = concat(new Uint8Array([version]), payload);
    const checksum = N.sha256(N.sha256(versioned)).slice(0, 4);
    return rippleBase58Encode(concat(versioned, checksum));
  }

  // ── bech32 (BIP-173), used with a witness-version prefix for BTC/LTC and
  //    without one for Cosmos-family chains ───────────────────────────────
  const BECH32_CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
  const BECH32_GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];

  function bech32Polymod(values) {
    let c = 1;
    for (const v of values) {
      const c0 = c >> 25;
      c = ((c & 0x1ffffff) << 5) ^ v;
      for (let i = 0; i < 5; i++) if ((c0 >> i) & 1) c ^= BECH32_GENERATOR[i];
    }
    return c ^ 1;
  }

  function bech32HrpExpand(hrp) {
    const r = [];
    for (const c of hrp) r.push(c.charCodeAt(0) >> 5);
    r.push(0);
    for (const c of hrp) r.push(c.charCodeAt(0) & 31);
    return r;
  }

  function convertBits(data, from, to) {
    let acc = 0, bits = 0;
    const ret = [];
    const maxv = (1 << to) - 1;
    for (const v of data) {
      acc = (acc << from) | v;
      bits += from;
      while (bits >= to) { bits -= to; ret.push((acc >> bits) & maxv); }
    }
    if (bits > 0) ret.push((acc << (to - bits)) & maxv);
    return ret;
  }

  /** witver === null => no witness-version byte (plain bech32, e.g. Cosmos). */
  function bech32Encode(hrp, witver, witprog) {
    const data = witver === null ? convertBits(witprog, 8, 5)
                                  : [witver, ...convertBits(witprog, 8, 5)];
    const checksum = [];
    const enc = bech32Polymod([...bech32HrpExpand(hrp), ...data, 0, 0, 0, 0, 0, 0]);
    for (let p = 0; p < 6; p++) checksum.push((enc >> (5 * (5 - p))) & 31);
    return hrp + '1' + [...data, ...checksum].map(d => BECH32_CHARSET[d]).join('');
  }

  function bech32Decode(addr) {
    const pos = addr.lastIndexOf('1');
    if (pos < 1) throw new Error('invalid bech32');
    const hrp = addr.slice(0, pos);
    const dataPart = addr.slice(pos + 1).toLowerCase();
    const data = [];
    for (const c of dataPart) {
      const v = BECH32_CHARSET.indexOf(c);
      if (v < 0) throw new Error('invalid bech32 char');
      data.push(v);
    }
    const check = bech32Polymod([...bech32HrpExpand(hrp), ...data]);
    if (check !== 0) throw new Error('bad bech32 checksum');
    return { hrp, data: data.slice(0, -6) };
  }

  // ── SS58 (Substrate/Polkadot) ───────────────────────────────────────────
  function ss58Encode(pubkey, prefix) {
    const payload = concat(new Uint8Array([prefix]), pubkey);
    const preimage = concat(N.utf8ToBytes('SS58PRE'), payload);
    const checksum = N.blake2b(preimage, { dkLen: 64 }).slice(0, 2);
    return base58Encode(concat(payload, checksum));
  }

  function ss58Decode(addr) {
    const full = base58Decode(addr);
    const payload = full.slice(0, full.length - 2);
    const checksum = full.slice(full.length - 2);
    const preimage = concat(N.utf8ToBytes('SS58PRE'), payload);
    const expect = N.blake2b(preimage, { dkLen: 64 }).slice(0, 2);
    if (checksum[0] !== expect[0] || checksum[1] !== expect[1]) throw new Error('bad SS58 checksum');
    return { prefix: payload[0], pubkey: payload.slice(1) };
  }

  // ── EIP-55 checksum (mixed-case hex, EVM addresses) ─────────────────────
  function toChecksumAddress(addr20) {
    const hex = N.bytesToHex(addr20);
    const hash = N.bytesToHex(N.keccak_256(N.utf8ToBytes(hex)));
    let out = '0x';
    for (let i = 0; i < hex.length; i++) {
      out += parseInt(hash[i], 16) >= 8 ? hex[i].toUpperCase() : hex[i];
    }
    return out;
  }

  function isValidChecksumAddress(addr) {
    if (!/^0x[0-9a-fA-F]{40}$/.test(addr)) return false;
    const lower = addr.slice(2).toLowerCase();
    return toChecksumAddress(N.hexToBytes(lower)) === addr;
  }

  // ── SLIP-0010 ed25519 HD derivation (all indices hardened — ed25519 has
  //    no non-hardened child derivation) ──────────────────────────────────
  function deriveEd25519(seed, path) {
    let I = N.hmac(N.sha512, N.utf8ToBytes('ed25519 seed'), seed);
    let key = I.slice(0, 32);
    let chainCode = I.slice(32);
    for (const index of path) {
      const hardened = index + 0x80000000;
      const data = concat(new Uint8Array([0]), key, be32(hardened >>> 0));
      I = N.hmac(N.sha512, chainCode, data);
      key = I.slice(0, 32);
      chainCode = I.slice(32);
    }
    return key;
  }

  // ── secp256k1 BIP32 HD derivation (standard hardened+non-hardened paths,
  //    via the bundled @scure/bip32 HDKey — see build/bundle.js for why
  //    this isn't hand-rolled) ─────────────────────────────────────────────
  function deriveSecp256k1(seed, path) {
    const child = N.HDKey.fromMasterSeed(seed).derive(path);
    return child.privateKey; // 32 bytes
  }

  // ── per-chain address derivation ────────────────────────────────────────

  function deriveBtcAddress(seed64) {
    const priv = deriveSecp256k1(seed64, "m/84'/0'/0'/0/0");
    const pub = N.secp256k1.getPublicKey(priv, true);
    const hash160 = N.ripemd160(N.sha256(pub));
    return bech32Encode('bc', 0, hash160);
  }

  function deriveLtcAddress(seed64) {
    const priv = deriveSecp256k1(seed64, "m/84'/2'/0'/0/0");
    const pub = N.secp256k1.getPublicKey(priv, true);
    const hash160 = N.ripemd160(N.sha256(pub));
    return bech32Encode('ltc', 0, hash160);
  }

  function deriveDogecoinAddress(seed64) {
    const priv = deriveSecp256k1(seed64, "m/44'/3'/0'/0/0");
    const pub = N.secp256k1.getPublicKey(priv, true);
    const hash160 = N.ripemd160(N.sha256(pub));
    return base58checkEncode(0x1e, hash160);
  }

  function deriveXrpAddress(seed64) {
    const priv = deriveSecp256k1(seed64, "m/44'/144'/0'/0/0");
    const pub = N.secp256k1.getPublicKey(priv, true);
    const hash160 = N.ripemd160(N.sha256(pub));
    return rippleBase58CheckEncode(0x00, hash160);
  }

  function deriveAtomAddress(seed64) {
    const priv = deriveSecp256k1(seed64, "m/44'/118'/0'/0/0");
    const pub = N.secp256k1.getPublicKey(priv, true);
    const hash160 = N.ripemd160(N.sha256(pub));
    return bech32Encode('cosmos', null, hash160);
  }

  function deriveTronAddress(seed64) {
    const priv = deriveSecp256k1(seed64, "m/44'/195'/0'/0/0");
    const pub = N.secp256k1.getPublicKey(priv, false); // uncompressed, 65 bytes: 04|X|Y
    const hash = N.keccak_256(pub.slice(1));
    return base58checkEncode(0x41, hash.slice(12));
  }

  function deriveEvmAddress(seed64) {
    const priv = deriveSecp256k1(seed64, "m/44'/60'/0'/0/0");
    const pub = N.secp256k1.getPublicKey(priv, false); // uncompressed, 65 bytes: 04|X|Y
    const hash = N.keccak_256(pub.slice(1));
    return toChecksumAddress(hash.slice(12));
  }

  function deriveSolanaAddress(seed64) {
    const priv = deriveEd25519(seed64, [44, 501, 0, 0]);
    const pub = N.ed25519.getPublicKey(priv);
    return base58Encode(pub);
  }

  function deriveDotAddress(seed64) {
    const priv = deriveEd25519(seed64, [44, 354, 0, 0, 0]);
    const pub = N.ed25519.getPublicKey(priv);
    return ss58Encode(pub, 0x00);
  }

  function deriveNearAddress(seed64) {
    const priv = deriveEd25519(seed64, [44, 397, 0]);
    const pub = N.ed25519.getPublicKey(priv);
    return N.bytesToHex(pub);
  }

  // ── client-side destination-address validation (Send-tab), keyed by
  //    the same chainFamily id used in CHAIN_REGISTRY ────────────────────
  function validateDestAddr(chainId, addr) {
    if (!addr) return false;
    try {
      switch (chainId) {
        case 'btc': { const d = bech32Decode(addr); return d.hrp === 'bc'; }
        case 'ltc': { const d = bech32Decode(addr); return d.hrp === 'ltc'; }
        case 'atom': { const d = bech32Decode(addr); return d.hrp === 'cosmos'; }
        case 'doge': { const d = base58checkDecode(addr); return d.version === 0x1e; }
        case 'tron': { const d = base58checkDecode(addr); return d.version === 0x41; }
        case 'xrp': return /^r[1-9A-HJ-NP-Za-km-z]{25,34}$/.test(addr);
        case 'solana': { const d = base58Decode(addr); return d.length === 32; }
        case 'dot': { const d = ss58Decode(addr); return d.prefix === 0x00; }
        case 'near': return /^[0-9a-f]{64}$/.test(addr);
        case 'evm': return /^0x[0-9a-fA-F]{40}$/.test(addr);
        default: return false;
      }
    } catch {
      return false;
    }
  }

  // ── registry tying it together — token_id values are the CANONICAL
  //    registry from svitlo-chain/src/rpc/mod.rs's token_name(), NOT
  //    guessed; addrPrefix matches the exact strings already live in
  //    production per mobile/screens/DepositScreen.tsx. ADA (18) has no
  //    derive function here — deferred per plan, "Coming soon" in the UI.
  //    token_id 1 (USDT) is Tron-native, not EVM — there is no separate
  //    native-TRX token_id in the backend today.
  const CHAIN_REGISTRY = [
    { id: 'btc',    symbol: 'BTC',  name: 'Bitcoin',        tokenIds: [4],   derive: deriveBtcAddress,     addrPrefix: 'btc' },
    { id: 'tron',   symbol: 'USDT', name: 'Tether (TRC-20)',tokenIds: [1],   derive: deriveTronAddress,    addrPrefix: 'tron' },
    { id: 'evm',    symbol: 'USDC', name: 'USD Coin',       tokenIds: [2],   derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'xrp',    symbol: 'XRP',  name: 'XRP',            tokenIds: [3],   derive: deriveXrpAddress,     addrPrefix: 'xrp' },
    { id: 'evm',    symbol: 'ETH',  name: 'Ethereum',       tokenIds: [5],   derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'evm',    symbol: 'BNB',  name: 'BNB Chain',      tokenIds: [6],   derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'solana', symbol: 'SOL',  name: 'Solana',         tokenIds: [7],   derive: deriveSolanaAddress,  addrPrefix: 'solana' },
    { id: 'evm',    symbol: 'AVAX', name: 'Avalanche',      tokenIds: [8],   derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'doge',   symbol: 'DOGE', name: 'Dogecoin',       tokenIds: [9],   derive: deriveDogecoinAddress,addrPrefix: 'doge' },
    { id: 'evm',    symbol: 'LINK', name: 'Chainlink',      tokenIds: [10],  derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'evm',    symbol: 'MATIC',name: 'Polygon',        tokenIds: [11],  derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'ltc',    symbol: 'LTC',  name: 'Litecoin',       tokenIds: [12],  derive: deriveLtcAddress,     addrPrefix: 'ltc' },
    { id: 'evm',    symbol: 'DAI',  name: 'Dai',            tokenIds: [13],  derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'evm',    symbol: 'UNI',  name: 'Uniswap',        tokenIds: [14],  derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'atom',   symbol: 'ATOM', name: 'Cosmos Hub',     tokenIds: [15],  derive: deriveAtomAddress,    addrPrefix: 'atom' },
    { id: 'evm',    symbol: 'ARB',  name: 'Arbitrum',       tokenIds: [16],  derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'evm',    symbol: 'SHIB', name: 'Shiba Inu',      tokenIds: [17],  derive: deriveEvmAddress,     addrPrefix: 'evm' },
    { id: 'dot',    symbol: 'DOT',  name: 'Polkadot',       tokenIds: [19],  derive: deriveDotAddress,     addrPrefix: 'dot' },
    { id: 'near',   symbol: 'NEAR', name: 'NEAR Protocol',  tokenIds: [20],  derive: deriveNearAddress,    addrPrefix: 'near' },
  ];

  window.svitChains = {
    CHAIN_REGISTRY,
    validateDestAddr,
    // exposed for ad-hoc verification against mobile's golden vectors:
    deriveBtcAddress, deriveLtcAddress, deriveDogecoinAddress, deriveXrpAddress,
    deriveAtomAddress, deriveTronAddress, deriveEvmAddress, deriveSolanaAddress,
    deriveDotAddress, deriveNearAddress,
  };
})();
