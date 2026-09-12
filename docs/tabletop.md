# Tabletop: tabuleiros, cenas, grid e tokens

## Board

`Board` pertence a uma única sala por meio de `salaId`. `cenaAtivaId` é
opcional/nulo quando nenhuma cena está selecionada. Nome e datas são validados
por `boardSchema`.

## Scene

`Scene` pertence a um tabuleiro e contém:

- `nome`: nome não vazio, com até 120 caracteres;
- `backgroundUrl`: URL opcional ou nula;
- `gridConfig`: configuração validada do grid;
- `visivel`: indicação de visibilidade;
- `createdAt` e `updatedAt`.

O contrato não implementa renderização, troca de cena, câmera ou controle de
visibilidade por papel.

## Token

`Token` representa uma instância posicionada em uma cena. Ele pode referenciar
um asset de origem e uma ficha de personagem. `x` e `y` são números finitos e
`escala` deve ser positiva e finita.

`statusBarMap` é um mapa livre de nomes de barras para valores `current`,
`maximum` e uma cor opcional. `customData` permite dados JSON adicionais.

```ts
import { tokenSchema } from '@motor-vtt/contracts';

const token = tokenSchema.parse({
  id: crypto.randomUUID(),
  cenaId: crypto.randomUUID(),
  nome: 'Goblin',
  x: 160,
  y: 96,
  escala: 1,
});
```
