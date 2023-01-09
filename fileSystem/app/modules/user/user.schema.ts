import { DataTypes } from "sequelize";
import { rolesModel } from "../roles/roles.schema";

import { sequelize } from "../../utility/sequelize";




export const userModel = sequelize.define("users", {
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
    

}, { timestamps: true, paranoid: true });

userModel.belongsTo(rolesModel, { 'foreignKey': "roleId" });
rolesModel.hasOne(userModel);



