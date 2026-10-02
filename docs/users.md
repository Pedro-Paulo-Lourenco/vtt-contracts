# Usuários e autenticação

## User

`User` representa um usuário do sistema:

- `id`: identificador UUID;
- `nome`: nome não vazio, com até 120 caracteres;
- `email`: endereço em formato válido, com até 255 caracteres;
- `status`: valor de `UserStatus`;
- `ultimoLogin`: data ISO ou `null`;
- `createdAt` e `updatedAt`: datas ISO válidas.

O contrato não contém senha, token ou cookie de sessão.

## AuthResponse

`AuthResponse` representa uma resposta de autenticação contendo o usuário em
`user`; `authResponseSchema` valida esse formato. Tokens de sessão não fazem
parte do contrato de resposta e devem ser transportados por cookies seguros.

## Validação

```ts
import { userSchema } from '@motor-vtt/contracts';

const result = userSchema.safeParse(payload);
if (!result.success) {
  console.error(result.error.issues);
}
```

O `userSchema` é exportado publicamente pelo pacote.
