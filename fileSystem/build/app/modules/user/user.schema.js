"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const sequelize_1 = require("sequelize");
const roles_schema_1 = require("../roles/roles.schema");
const sequelize_2 = require("../../utility/sequelize");
exports.userModel = sequelize_2.sequelize.define("users", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, { timestamps: true, paranoid: true });
exports.userModel.belongsTo(roles_schema_1.rolesModel, { 'foreignKey': "roleId" });
roles_schema_1.rolesModel.hasOne(exports.userModel);
//# sourceMappingURL=user.schema.js.map