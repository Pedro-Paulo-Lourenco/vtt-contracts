# Assets

`Asset` representa um recurso reutilizável, como mapa, token ou modelo de
ficha. Os campos principais são:

- `usuarioId` e `salaId`: proprietários opcionais do asset;
- `nome`: texto não vazio, com até 160 caracteres;
- `tipo`: `TEMPLATE_FICHA`, `NPC_PRESET`, `MAPA` ou `TOKEN`;
- `url`: URL válida do recurso;
- `pastaId`: pasta opcional;
- `visibilidade`: `PRIVADO`, `SALA`, `ATRIBUIDO` ou `GLOBAL`;
- `metadata`: objeto JSON opcional;
- `createdAt` e `updatedAt`.

`assetSchema` valida o formato do asset, mas não decide quem pode acessá-lo,
não clona recursos e não faz upload de arquivos. Essas decisões pertencem à
camada de aplicação.

```ts
import { AssetType, assetSchema, AssetVisibility } from '@motor-vtt/contracts';

const asset = assetSchema.parse({
  id: crypto.randomUUID(),
  nome: 'Mapa da floresta',
  tipo: AssetType.MAPA,
  url: 'https://cdn.example.com/floresta.png',
  visibilidade: AssetVisibility.SALA,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});
```
