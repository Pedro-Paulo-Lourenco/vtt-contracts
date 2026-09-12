# Contratos comuns

Este módulo contém os tipos reutilizados pelos demais domínios.

## Identificadores e JSON

`UUID` é um alias de `string` usado nos relacionamentos entre entidades. O
schema correspondente, `uuidSchema`, exige um UUID válido.

`JsonPrimitive`, `JsonValue` e `JsonObject` representam estruturas JSON
recursivas. `jsonObjectSchema` valida um objeto JSON com chaves string.

```ts
import { jsonObjectSchema, uuidSchema } from '@motor-vtt/contracts';

uuidSchema.parse('550e8400-e29b-41d4-a716-446655440000');
jsonObjectSchema.parse({ origem: 'importado', ativo: true });
```

## Preferências de visualização

`ViewPreferences` e `viewPreferencesSchema` representam o estado local da
câmera e da aba de um participante:

- `zoom`: escala atual;
- `panX` e `panY`: deslocamento da câmera;
- `aba`: aba selecionada, opcional e limitada a 80 caracteres.

Os valores numéricos devem ser finitos.

## Configuração do grid

`GridConfig` e `gridConfigSchema` definem:

- `enabled`: se o grid está ativo;
- `size`: tamanho positivo e inteiro da célula;
- `color`: cor opcional, com até 32 caracteres;
- `opacity`: opacidade opcional entre `0` e `1`.

## Respostas e erros

`ApiSuccess<T>` padroniza uma resposta bem-sucedida com `data` e um
`correlationId` opcional. `ApiError` contém `code`, `message` e, opcionalmente,
`correlationId` e `details`.

O `apiErrorSchema` valida erros externos ao pacote. Não há atualmente um schema
de `ApiSuccess` exportado.
