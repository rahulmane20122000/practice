import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { ROLES } from "./roles.constants";



export const rolesModel = sequelize.define('Roles', {
    id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    roleName: {
        type: DataTypes.STRING,
       defaultValue:ROLES.ALLUMNI
    }
}, { timestamps: true });

