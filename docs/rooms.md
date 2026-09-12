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

```ts
import { participantSchema, RoomStatus } from '@motor-vtt/contracts';

const participant = participantSchema.parse(payload);
const status = RoomStatus.ATIVA;
```

Os schemas validam formato e limites dos dados, mas não executam autorização,
convites, ingresso ou transferência de papel.
