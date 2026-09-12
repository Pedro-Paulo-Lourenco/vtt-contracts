# Histórico de mensagens

`MessageLog` registra uma mensagem associada a uma sala e a um autor:

- `tipo`: `CHAT`, `ROLAGEM` ou `SISTEMA`;
- `conteudo`: texto não vazio, com até 4.000 caracteres;
- `secreto`: indica se a mensagem tem caráter secreto;
- `metadata`: objeto JSON opcional;
- `createdAt`: data ISO.

O `messageLogSchema` valida o payload. Ele não implementa envio, filtragem por
participante, rolagem de dados, sanitização ou broadcast.

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
