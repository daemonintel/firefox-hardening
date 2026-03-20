## Objetivo
Este repositório tem como objetivo reduzir a superfície de exposição do Firefox com foco em:

- Privacidade
- Anti-fingerprinting
- Redução de vazamentos de dados
- Uso prático para OSINT

Todas as configurações foram ajustadas e validadas com base nos testes do BrowserLeaks.
https://browserleaks.com/
---

## Filosofia
Hardening não significa anonimato total.

O objetivo é:
- Reduzir rastreabilidade
- Diminuir inconsistências de fingerprint
- Evitar vazamentos óbvios (IP, WebRTC, headers)

### Trade-offs:
- Alguns sites podem quebrar
- Pode aumentar o número de CAPTCHAs
- Nem tudo pode ser ocultado

---

## Metodologia

As configurações foram testadas utilizando:

- WebRTC Leak Test
- Canvas Fingerprint
- WebGL Fingerprint
- DNS Leak Test
- HTTP Headers / Client Hints

Referência:
https://browserleaks.com/

---

## TL;DR (Aplicação rápida)

1. Baixe o arquivo `user.js`
2. Acesse: `about:profiles`
3. Abra a pasta do perfil ativo
4. Cole o `user.js` dentro da pasta
5. Reinicie o Firefox

---

## Configurações aplicadas

### Rede e vazamentos
- WebRTC desativado (evita vazamento de IP real)
- DNS Prefetch desativado

---

### Fingerprinting
- Canvas protegido
- WebGL reduzido
- User-Agent mais consistente

---

### Telemetria
- Telemetria desativada
- Estudos e coleta de dados desativados

---

### Armazenamento
- Cookies restritos
- Isolamento de armazenamento por site

---

## Add-ons recomendados

- uBlock Origin 
- Privacy Badger
- Canvas Blocker
- Firefox Multi-Account Containers
- NoScript

---

## Uso prático (OSINT)

Esse perfil ajuda a:
- Reduzir exposição durante navegação
- Evitar vazamentos durante coleta de dados
- Diminuir correlação entre sessões

### Importante:
Isso NÃO substitui:
- VPN
- Tor
- Boas práticas de OPSEC

---

## Limitações

- Fingerprinting não pode ser totalmente evitado
- Ainda é possível identificar o navegador em cenários avançados
- O comportamento do usuário impacta diretamente a privacidade

---

## Teste você mesmo

Acesse:
https://browserleaks.com/

Compare os resultados antes e depois das configurações.

---
