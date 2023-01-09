import { MessageHandler } from "../../utility/response-handler"

export const ROLES = {
    "ADMIN": 1,
    "ALLUMNI": 2
}


export const rolesConstants = {
    ROLES_ADDED: new MessageHandler(200,"Role Added!!"),
    FAILED: new MessageHandler(400,"Failed To Process Request!!!")
}

