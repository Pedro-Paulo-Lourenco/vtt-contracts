# Enums e valores permitidos

Os enums são exportados pelo pacote e devem ser usados no lugar de strings
soltas quando o domínio exigir um conjunto fechado de valores.

| Enum | Valores |
| --- | --- |
| `UserStatus` | `PENDENTE`, `ATIVO`, `BLOQUEADO` |
| `RoomStatus` | `ATIVA`, `PAUSADA`, `ENCERRADA` |
| `ParticipantRole` | `MESTRE`, `JOGADOR` |
| `AssetType` | `TEMPLATE_FICHA`, `NPC_PRESET`, `MAPA`, `TOKEN` |
| `AssetVisibility` | `PRIVADO`, `SALA`, `ATRIBUIDO`, `GLOBAL` |
| `MessageType` | `CHAT`, `ROLAGEM`, `SISTEMA` |
| `SheetFieldType` | `TEXT`, `NUMBER`, `BOOLEAN`, `RESOURCE`, `FORMULA` |

Os schemas Zod usam esses enums para validar os campos correspondentes. Alterar
ou adicionar valores é uma mudança de contrato e deve ser coordenada entre os
consumidores do pacote.
