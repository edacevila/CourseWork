"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpareParts = exports.Performers = exports.Services = exports.Orders = exports.Basket = exports.User = void 0;
var database_1 = __importDefault(require("../db/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = database_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
    name: { type: sequelize_1.default.STRING },
    number: { type: sequelize_1.default.STRING },
});
exports.User = User;
var Basket = database_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var Orders = database_1.default.define("orders", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    data: { type: sequelize_1.default.STRING },
    description: { type: sequelize_1.default.STRING },
    price: { type: sequelize_1.default.FLOAT },
});
exports.Orders = Orders;
var Services = database_1.default.define("services", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING },
    description: { type: sequelize_1.default.STRING },
    price: { type: sequelize_1.default.FLOAT },
});
exports.Services = Services;
var Performers = database_1.default.define("performers", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: { type: sequelize_1.default.STRING },
    specialization: { type: sequelize_1.default.STRING },
});
exports.Performers = Performers;
var SpareParts = database_1.default.define("spareparts", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING },
    description: { type: sequelize_1.default.STRING },
    price: { type: sequelize_1.default.INTEGER },
});
exports.SpareParts = SpareParts;
User.hasOne(Basket);
Basket.belongsTo(User);
User.hasMany(Orders);
Orders.belongsTo(User);
Performers.hasMany(Orders);
Orders.belongsTo(Performers);
