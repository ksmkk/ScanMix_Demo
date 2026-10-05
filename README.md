# ScanMix Demo — DevGotchi Unhealthy Repository

Repositorio de laboratorio creado **solo para pruebas educativas de DevGotchi**.

Su objetivo es presentar múltiples señales de mala salud técnica de forma intencional:
- CI con fallos.
- Cobertura de tests baja.
- Muy pocos tests.
- Código con mala calidad y deuda técnica.
- Configuración insegura de demostración.
- Ausencia intencional de `.gitignore`.
- Dependencias antiguas de demostración.
- IaC ficticia con un bucket público en `infra/insecure-demo.tf` (sin provider ni despliegue).

> No usar en producción ni desplegar públicamente.

## Uso local

```bash
npm install
npm test
npm start
```

El resultado esperado es que varias comprobaciones fallen o muestren una salud técnica baja.
