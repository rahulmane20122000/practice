"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
const roles_constants_1 = require("../roles/roles.constants");
exports.userModel = sequelize_2.sequelize.define('users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    track: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    isAccepted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: roles_constants_1.ROLES.ALLUMNI
    }
}, { timestamps: true, paranoid: true, freezeTableName: true });
//# sourceMappingURL=user.schema.js.map