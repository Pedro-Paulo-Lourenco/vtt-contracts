export var UserStatus;
(function (UserStatus) {
    UserStatus["PENDENTE"] = "PENDENTE";
    UserStatus["ATIVO"] = "ATIVO";
    UserStatus["BLOQUEADO"] = "BLOQUEADO";
})(UserStatus || (UserStatus = {}));
export var RoomStatus;
(function (RoomStatus) {
    RoomStatus["ATIVA"] = "ATIVA";
    RoomStatus["PAUSADA"] = "PAUSADA";
    RoomStatus["ENCERRADA"] = "ENCERRADA";
})(RoomStatus || (RoomStatus = {}));
export var ParticipantRole;
(function (ParticipantRole) {
    ParticipantRole["MESTRE"] = "MESTRE";
    ParticipantRole["JOGADOR"] = "JOGADOR";
})(ParticipantRole || (ParticipantRole = {}));
export var AssetType;
(function (AssetType) {
    AssetType["TEMPLATE_FICHA"] = "TEMPLATE_FICHA";
    AssetType["NPC_PRESET"] = "NPC_PRESET";
    AssetType["MAPA"] = "MAPA";
    AssetType["TOKEN"] = "TOKEN";
})(AssetType || (AssetType = {}));
export var AssetVisibility;
(function (AssetVisibility) {
    AssetVisibility["PRIVADO"] = "PRIVADO";
    AssetVisibility["SALA"] = "SALA";
    AssetVisibility["ATRIBUIDO"] = "ATRIBUIDO";
    AssetVisibility["GLOBAL"] = "GLOBAL";
})(AssetVisibility || (AssetVisibility = {}));
export var MessageType;
(function (MessageType) {
    MessageType["CHAT"] = "CHAT";
    MessageType["ROLAGEM"] = "ROLAGEM";
    MessageType["SISTEMA"] = "SISTEMA";
})(MessageType || (MessageType = {}));
export var SheetFieldType;
(function (SheetFieldType) {
    SheetFieldType["TEXT"] = "TEXT";
    SheetFieldType["NUMBER"] = "NUMBER";
    SheetFieldType["BOOLEAN"] = "BOOLEAN";
    SheetFieldType["RESOURCE"] = "RESOURCE";
    SheetFieldType["FORMULA"] = "FORMULA";
})(SheetFieldType || (SheetFieldType = {}));
//# sourceMappingURL=types.js.map