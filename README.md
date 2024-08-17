# ecglobal-test-app

## Tecnologias utilizadas

- React Native com [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/) para estilização
- [TanStack Query](https://tanstack.com/query/v3) para gerenciamento de estados das queries
- [pnpm](https://pnpm.io/) como gerenciador de pacotes

## Como rodar

Recomendado usar o Node 20:\

### Habilitar o PNPM

```bash
corepack enable pnpm
```

### Instalar dependências

```bash
pnpm install
```

### Iniciar

```bash
pnpm start
```

### Acessar o app

Para acessar o app existem 3 opções:

- Aperte "A" para instalar e iniciar o app no emulador do Android rodando localmente
- Aperte "W" para abrir a versão web no navegador
- Use o QR code que aparece no terminal, no aplicativo do Expo em um dispositivo físico Android ou IOS (Neste caso é necessário alterar o IP da api no arquivo services/api.ts)
