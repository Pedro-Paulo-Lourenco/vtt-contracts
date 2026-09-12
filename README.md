# @motor-vtt/contracts

Contratos compartilhados entre o frontend e o backend do Motor VTT Universal.

## Desenvolvimento

```bash
npm install
npm run typecheck
npm run build
```

O diretório `dist/` é versionado porque o pacote pode ser instalado diretamente
de um repositório GitHub.

## Uso

```ts
import type { User } from '@motor-vtt/contracts';
import { userSchema } from '@motor-vtt/contracts';
```

Os tipos descrevem os contratos em tempo de compilação e os schemas Zod fazem a
validação em tempo de execução.
