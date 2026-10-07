# Histórico de mensagens

`MessageLog` registra uma mensagem associada a uma sala e a um autor:

- `tipo`: `CHAT`, `ROLAGEM` ou `SISTEMA`;
- `conteudo`: texto não vazio, com até 4.000 caracteres;
- `secreto`: indica se a mensagem tem caráter secreto;
- `metadata`: objeto JSON opcional;
- `createdAt`: data ISO.

O `messageLogSchema` valida o payload. Ele não implementa envio, filtragem por
participante, rolagem de dados, sanitização ou broadcast.

## Chat e rolagens do tabletop

O tabletop usa os mesmos campos de `MessageLog` para texto e rolagens:

- `CHAT`: `conteudo` contém texto simples;
- `ROLAGEM`: `conteudo` contém a expressão original e `metadata.roll` contém
  exclusivamente o resultado calculado no backend;
- `autorId`, `salaId` e `createdAt` identificam quem enviou, onde e quando.

O formato JSON público de uma rolagem é descrito pelos tipos
`DiceRollResult`, `DiceRollRepetitionResult` e `DiceRollDieResult` e validado por
`diceRollResultSchema`. Cada repetição guarda dados independentes; `dice`
preserva os valores de cada dado explosivo em `rolls` e os valores após
matemática por dado em `modifiedRolls`. `rawRolls` preserva os valores na ordem
gerada; `displayRolls` e `displayModifiedRolls` usam a ordem exibida. `total`
ou `successes` é preenchido para cada repetição, e o outro campo fica `null`.
`explosionLimitReached` identifica quando o limite defensivo encerrou uma
cadeia explosiva.

O evento de envio recebe somente `{ v: 1, content }`. Ele não aceita sala,
autor, resultados ou valores aleatórios do cliente. O servidor autentica o
socket, exige que ele tenha entrado numa sala da qual o usuário é participante
ativo, identifica expressões e calcula rolagens com aleatoriedade criptográfica
do servidor antes de persistir e transmitir a mensagem. Os eventos e payloads
Socket.IO seguem o guia operacional do tabletop.

### Subconjunto da sintaxe V1 de Rollem

O tabletop implementa somente o subconjunto abaixo da
[documentação oficial V1 Dice Syntax](https://rollem.rocks/docs/v1-syntax):

| Forma | Semântica |
| --- | --- |
| `NdX` ou `dX` | Rola N dados de X faces; N omitido equivale a 1. |
| `NdX+Z` ou `NdX-Z` | Soma ou subtrai Z uma vez do total da repetição. |
| `R#NdX` | Repete a expressão R vezes em listas independentes. |
| `NdX!` | Cada resultado máximo rola outro dado; a cadeia acumula os resultados. |
| `NdXns` ou `NdX!ns` | Preserva a ordem de geração, sem ordenar os resultados. |
| `NdX++Z` ou `NdX--Z` | Soma ou subtrai Z de cada valor rolado, inclusive cada etapa explosiva. |
| `NdX>>Z` | Conta valores maiores ou iguais a Z. |
| `NdX<<Z` | Conta valores menores ou iguais a Z. |

Sem `ns`, os valores são exibidos em ordem decrescente, conforme a V1. Os
limites de `>>` e `<<` são inclusivos, conforme a documentação V1. Repetições
não produzem um total global. A implementação não aceita outros recursos V1,
como keep/drop, dados Fate, comparações, expressões matemáticas ou alvo
personalizado de explosão (`!Z`).

Limites de segurança desta implementação: mensagem de até 1.000 caracteres,
até 100 repetições, até 100 dados no total (repetições × dados por lista), dados
de 2 a 1.000.000 faces e até 100 explosões adicionais por dado. A faixa de
faces e o limite de explosões são restrições defensivas locais; a especificação
V1 consultada não fixa esses dois máximos. Quando a cadeia atinge o limite, o
resultado permanece visível e sinaliza `explosionLimitReached`.

Os campos e schemas de dados são exportados pelo pacote em
`DiceRollResult` e `diceRollResultSchema`. Como as aplicações podem consumir
uma versão publicada anterior do pacote, os payloads Socket.IO são descritos
também no guia operacional do tabletop. Neste workspace frontend e backend
continuam fixados na versão publicada `@motor-vtt/contracts@1.0.1`; seus
validadores locais seguem exatamente os campos acima até que uma nova versão
dos contratos seja publicada e adotada.

```ts
import { MessageType, messageLogSchema } from '@motor-vtt/contracts';

const message = messageLogSchema.parse({
  id: crypto.randomUUID(),
  salaId: crypto.randomUUID(),
  autorId: crypto.randomUUID(),
  tipo: MessageType.CHAT,
  conteudo: 'A sessão começou.',
  secreto: false,
  createdAt: new Date().toISOString(),
});
```

Os testes de sintaxe e cálculo ficam em `backend/tests/dice-roller.test.ts`; os
testes de autenticação, isolamento por sala e persistência ficam em
`backend/tests/tabletop.integration.test.ts`. Execute `npm test` no backend,
`npm test` no frontend e `npm run typecheck && npm run build` nos três projetos.
