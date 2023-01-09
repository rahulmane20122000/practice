"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
const user_schema_1 = require("../user/user.schema");
exports.fileModel = sequelize_2.sequelize.define('files', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    filePath: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null
    },
    isFolder: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    parent_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    size: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    }
}, { timestamps: true, paranoid: true });
user_schema_1.userModel.hasMany(exports.fileModel);
exports.fileModel.belongsTo(user_schema_1.userModel);
//# sourceMappingURL=file.schema.js.map