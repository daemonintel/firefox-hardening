// ==============================
// NETWORK / VAZAMENTOS
// ==============================

// Desativa WebRTC (evita vazamento de IP real)
user_pref("media.peerconnection.enabled", false);

// Desativa DNS prefetch (evita consultas antecipadas)
user_pref("network.dns.disablePrefetch", true);

// Desativa prefetch de links
user_pref("network.prefetch-next", false);

// ==============================
// TELEMETRIA
// ==============================

// Desativa telemetria
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "");

// Desativa coleta de dados
user_pref("datareporting.healthreport.uploadEnabled", false);

// Desativa estudos
user_pref("app.shield.optoutstudies.enabled", false);

// ==============================
// FINGERPRINTING
// ==============================

// Ativa proteção contra fingerprinting (pode quebrar alguns sites)
user_pref("privacy.resistFingerprinting", true);

// Desativa acesso a sensores
user_pref("device.sensors.enabled", false);

// Desativa API de bateria
user_pref("dom.battery.enabled", false);

// ==============================
// COOKIES / STORAGE
// ==============================

// Isolamento de cookies por site
user_pref("privacy.firstparty.isolate", true);

// Limita cookies de terceiros
user_pref("network.cookie.cookieBehavior", 1);

// ==============================
// SEGURANÇA GERAL
// ==============================

// Desativa execução de conteúdo inseguro
user_pref("security.mixed_content.block_active_content", true);

// Bloqueia pop-ups
user_pref("dom.disable_open_during_load", true);

// ==============================
// MISC
// ==============================

// Desativa preenchimento automático de formulários
user_pref("browser.formfill.enable", false);

// Desativa sugestões de busca
user_pref("browser.search.suggest.enabled", false);
