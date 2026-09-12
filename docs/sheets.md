# Templates e fichas

## SheetTemplate

`SheetTemplate` define a estrutura de uma ficha. Pode pertencer a um usuário,
uma sala ou permanecer sem esses vínculos. `camposSchema` possui quatro seções:

- `cabecalho`;
- `atributos`;
- `recursos`;
- `pericias`.

Cada `SheetField` tem `id`, `label` e `type`, podendo incluir `formula`,
`required` e `attributeId`. Os tipos disponíveis são `TEXT`, `NUMBER`,
`BOOLEAN`, `RESOURCE` e `FORMULA`.

## CharacterSheet

`CharacterSheet` referencia um template e um usuário. `dadosPreenchidos` é um
objeto JSON, enquanto `versao` é um inteiro não negativo para controle da
versão do conteúdo.

```ts
import { SheetFieldType, sheetTemplateSchema } from '@motor-vtt/contracts';

const template = sheetTemplateSchema.parse({
  id: crypto.randomUUID(),
  nome: 'Ficha básica',
  camposSchema: {
    cabecalho: [{ id: 'nome', label: 'Nome', type: SheetFieldType.TEXT }],
    atributos: [],
    recursos: [],
    pericias: [],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});
```

Os schemas validam a estrutura dos campos, mas não interpretam fórmulas, não
detectam referências circulares e não recalculam valores.
