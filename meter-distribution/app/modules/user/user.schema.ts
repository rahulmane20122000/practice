import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { ROLES } from "../roles/roles.constants";
import { rolesModel } from "../roles/roles.schema";



export const userModel = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.STRING,
        defaultValue: ROLES.ALLUMNI
    }

}, { timestamps: true, paranoid: true, freezeTableName: true });

userModel.belongsTo(rolesModel, { foreignKey: 'roleId' });

