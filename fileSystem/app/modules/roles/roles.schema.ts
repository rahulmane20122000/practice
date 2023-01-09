import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";


export const rolesModel = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roleName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true });



