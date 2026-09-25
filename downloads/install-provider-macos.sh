#!/usr/bin/env bash
set -e
cat <<'MSG'
Access to Svitlo provider software is by approved account only.

Every provider node needs an approved public key before the orchestrator
will let it register anyway (see /downloads/request-access/) -- this file
now requires the same approval up front, at download time.

If you were approved, log in at https://api.svitlochain.com/gated/login
to download this file (and the rest of the provider software).

Not part of the approved group yet? Reach out via /support/ with your
hardware (GPU model + VRAM) and availability -- membership is reviewed
case-by-case, it isn't self-service.

---

Доступ до провайдерського софтверу Svitlo — лише для затверджених
акаунтів.

Кожна провайдер-нода все одно потребує затвердженого публічного ключа,
щоб оркестратор дозволив реєстрацію (див. /downloads/request-access/) —
тепер те саме затвердження потрібне вже на етапі завантаження файлу.

Якщо вас затвердили, увійдіть на
https://api.svitlochain.com/gated/login щоб завантажити цей файл (і решту
провайдерського софтверу).

Ще не в затвердженій групі? Напишіть через /support/ з інформацією про
своє обладнання (модель GPU + VRAM) і доступність — членство розглядається
індивідуально, це не самообслуговування.

MSG
exit 1
