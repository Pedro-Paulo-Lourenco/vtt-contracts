# Usuários e autenticação

## User

`User` representa um usuário do sistema:

- `id`: identificador UUID;
- `nome`: nome não vazio, com até 120 caracteres;
- `email`: endereço em formato válido;
- `status`: valor de `UserStatus`;
- `ultimoLogin`: data ISO opcional ou nula;
- `createdAt` e `updatedAt`: datas ISO válidas.

O contrato não contém senha, token ou cookie de sessão.

## AuthResponse

`AuthResponse` representa uma resposta de autenticação contendo o usuário em
`user`. O pacote não implementa o fluxo de login; apenas define o formato do
resultado que pode ser compartilhado entre aplicações.

## Validação

```ts
import { userSchema } from '@motor-vtt/contracts';

const result = userSchema.safeParse(payload);
if (!result.success) {
  console.error(result.error.issues);
}
```

O `userSchema` é exportado publicamente pelo pacote.
