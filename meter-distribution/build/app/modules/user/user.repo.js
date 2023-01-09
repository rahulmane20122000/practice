"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const add = (userDetails) => user_schema_1.userModel.create(Object.assign({}, userDetails));
const getAll = () => user_schema_1.userModel.findAll();
const getAccepted = () => user_schema_1.userModel.findAll({ where: { isAccepted: true } });
const deleteOne = (id) => user_schema_1.userModel.update({ isDeleted: true }, { where: { id: id } });
const updateStatus = (id) => user_schema_1.userModel.update({ isAccepted: true }, { where: { id: id } });
const updateOne = (id, updatedUserDetails) => user_schema_1.userModel.update(updatedUserDetails, { where: { id: id } });
exports.default = { add, getAll, getAccepted, updateOne, deleteOne, updateStatus };
//# sourceMappingURL=user.repo.js.map