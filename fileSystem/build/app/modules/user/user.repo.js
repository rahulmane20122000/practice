"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const add = (userDetails) => user_schema_1.userModel.create(Object.assign({}, userDetails));
const getAll = () => user_schema_1.userModel.findAll();
const getOne = (field) => user_schema_1.userModel.findOne({ where: Object.assign({}, field) });
const deleteOne = (id) => user_schema_1.userModel.destroy({ where: { id: id } });
const updateOne = (id, updatedUserDetails) => user_schema_1.userModel.update(updatedUserDetails, { where: { id: id } });
exports.default = { add, getAll, updateOne, deleteOne, getOne };
//# sourceMappingURL=user.repo.js.map