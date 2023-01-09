import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { userModel } from "../user/user.schema";

export const fileModel = sequelize.define('files', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filePath: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    isFolder: {
        type: DataTypes.BOOLEAN,

    },
    parent_id: {
        type: DataTypes.INTEGER
    },
    size: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    date:{
        type:DataTypes.DATEONLY,
        defaultValue:new Date
    }
}, { timestamps: true, paranoid: true, indexes: [{ unique: true, fields: ['name', 'parent_id'] }] });

userModel.hasMany(fileModel);
fileModel.belongsTo(userModel);

