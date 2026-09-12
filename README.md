# @motor-vtt/contracts

Contratos compartilhados entre o frontend e o backend do Motor VTT Universal.
O pacote concentra os tipos TypeScript, enums e schemas Zod usados para manter
os dois lados da aplicação alinhados.

## O que este pacote oferece

- Tipos para usuários, salas, participantes, tabuleiros, cenas, tokens, assets,
  fichas e mensagens.
- Enums com os valores permitidos pelos contratos compartilhados.
- Schemas Zod para validação em tempo de execução.
- Tipos derivados de schemas para cenários em que o payload validado também é
  usado como tipo TypeScript.
- Tipos comuns para UUIDs, JSON, preferências de visualização, grid e respostas
  de API.

Este pacote não implementa API REST, persistência, autenticação, WebSockets,
permissões de backend ou regras de negócio executáveis. Essas responsabilidades
pertencem às aplicações que consomem os contratos.

## Documentação

| Assunto | Documentação |
| --- | --- |
| Contratos comuns, JSON e respostas de API | [Contratos comuns](docs/common.md) |
| Usuários e autenticação | [Usuários](docs/users.md) |
| Salas e participantes | [Salas](docs/rooms.md) |
| Tabuleiros, cenas, grid e tokens | [Tabletop](docs/tabletop.md) |
| Assets e visibilidade | [Assets](docs/assets.md) |
| Templates e fichas de personagem | [Fichas](docs/sheets.md) |
| Histórico de mensagens | [Mensagens](docs/messages.md) |
| Enums e valores permitidos | [Enums](docs/enums.md) |
| Validação e integração | [Validação](docs/validation.md) |

## Instalação e desenvolvimento

```bash
npm install
npm run typecheck
npm run build
```

O diretório `dist/` é versionado porque o pacote pode ser instalado diretamente
de um repositório GitHub.

## Uso básico

```ts
import type { User } from '@motor-vtt/contracts';
import { userSchema } from '@motor-vtt/contracts';

const user: User = userSchema.parse(payload);
```

Os tipos descrevem os contratos em tempo de compilação. Os schemas Zod validam
os dados recebidos em tempo de execução e lançam um erro quando o payload não
atende ao contrato.
