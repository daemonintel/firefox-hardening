## Objetivo
Este repositório foi pensando para reduzir a superfície de exposição em navegação web via browsers. Criei um arquivo em javascript básico para ser aplicado no Firefox usando as configurações mais utilizadas para mitigar boa parte do fingerprinting geral da navegação. 
---

## O que você vai precisar ? 

- Firefox
- VM ou host local
- Conhecimento prévio de ``about:config``

Todas as configurações foram ajustadas e validadas com base nos testes do BrowserLeaks.
https://browserleaks.com/
---

# O que vaza em sua navegação ?

- Endereço IP
- Javascript
- WebRTC
- Canvas Fingerprinting
- WebGL
- Font Fingerprinting
- Geolocation API
- Features Detection
- Content Filters
- TLS Client
---

### Trade-offs:
- Alguns sites podem quebrar
- Pode aumentar o número de CAPTCHAs
- Nem tudo pode ser ocultado

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

## Add-ons recomendados

- uBlock Origin 
- Privacy Badger
- Canvas Blocker
- Firefox Multi-Account Containers
- NoScript

