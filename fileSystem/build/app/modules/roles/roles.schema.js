"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
exports.rolesModel = sequelize_2.sequelize.define('roles', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roleName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true });
//# sourceMappingURL=roles.schema.js.map