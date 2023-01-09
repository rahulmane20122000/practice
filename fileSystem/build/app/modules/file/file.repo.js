"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_schema_1 = require("./file.schema");
const create = (data) => file_schema_1.fileModel.create(Object.assign({}, data));
const getAll = () => file_schema_1.fileModel.findAll({});
const getOne = (parentId) => file_schema_1.fileModel.findOne({ where: { id: parentId }, attributes: ['name', 'filePath'] });
exports.default = { create, getAll, getOne };
//# sourceMappingURL=file.repo.js.map