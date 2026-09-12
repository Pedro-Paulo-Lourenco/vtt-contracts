# Validação e integração

## Tipos versus schemas

Interfaces e aliases TypeScript ajudam durante a compilação, mas desaparecem em
tempo de execução. Os schemas Zod devem ser usados para validar dados vindos de
HTTP, WebSockets, banco de dados ou qualquer outra fronteira externa.

```ts
import { roomSchema } from '@motor-vtt/contracts';

const result = roomSchema.safeParse(input);

if (!result.success) {
  // result.error.issues contém os campos inválidos.
  throw new Error('Sala inválida');
}

const room = result.data;
```

Use `parse` quando uma entrada inválida deve lançar exceção imediatamente e
`safeParse` quando a aplicação precisa tratar o erro de forma explícita.

## Datas

`dateSchema` exige uma string no formato aceito por `z.string().datetime()`.
Use datas ISO completas, por exemplo `2026-09-12T15:30:00.000Z`.

## Exportações

O ponto de entrada público é o pacote raiz:

```ts
import {
  Room,
  RoomStatus,
  roomSchema,
} from '@motor-vtt/contracts';
```

Não importe arquivos internos de `src/` ou `dist/`; eles não fazem parte da
interface pública documentada.

## Compatibilidade

Mudanças em nomes de campos, nulabilidade, limites dos schemas ou valores de
enums podem quebrar frontend e backend. Trate essas mudanças como alterações
de contrato e valide os consumidores antes de publicar uma nova versão.
