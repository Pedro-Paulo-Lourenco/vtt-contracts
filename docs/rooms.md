# Salas e participantes

## Room

Uma `Room` identifica uma sessão de jogo:

- `id`: UUID da sala;
- `nome`: nome não vazio, com até 120 caracteres;
- `codigoConvite`: código entre 6 e 64 caracteres;
- `criadorId`: UUID do usuário criador;
- `status`: `ATIVA`, `PAUSADA` ou `ENCERRADA`;
- `createdAt` e `updatedAt`: datas ISO.

## Participant

`Participant` representa a participação de um usuário:

- `salaId` e `usuarioId`: referências da sala e do usuário;
- `papel`: `MESTRE` ou `JOGADOR`;
- `ativo`: indica se a participação está ativa;
- `preferenciasView`: zoom, pan e aba do participante;
- `joinedAt`: data ISO da entrada na sala.

`participantSchema` valida também a estrutura de `preferenciasView`.

## Requisições de sala

`createRoomRequestSchema` valida somente `{ nome }` e
`joinRoomRequestSchema` valida somente `{ codigoConvite }`. Ambos rejeitam
campos extras: a criação não aceita identidade, papel, status ou código de
convite fornecidos pelo cliente. O backend deve definir esses valores a partir
do usuário autenticado e das regras da aplicação. `roomIdSchema` valida o UUID
de um identificador de sala.

`roomSchema` continua sendo o contrato do objeto completo da sala retornado
pela API:

```ts
import {
  createRoomRequestSchema,
  joinRoomRequestSchema,
  roomIdSchema,
  roomSchema,
} from '@motor-vtt/contracts';

const createInput = createRoomRequestSchema.parse(request.body);
const joinInput = joinRoomRequestSchema.parse(request.body);
const roomId = roomIdSchema.parse(request.params.salaId);
const responseRoom = roomSchema.parse(room);
```

As rotas devem converter falhas de `parse`/`safeParse` no envelope padronizado
de erro da API.

```ts
import { participantSchema, RoomStatus } from '@motor-vtt/contracts';

const participant = participantSchema.parse(payload);
const status = RoomStatus.ATIVA;
```

Os schemas validam formato e limites dos dados, mas não executam autorização,
convites, ingresso ou transferência de papel.
