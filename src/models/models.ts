/** @format */

import DataBase from "../db/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  name: { type: DataTypes.STRING },
  number: { type: DataTypes.STRING },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Orders = DataBase.define("orders", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  data: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT },
});

const Services = DataBase.define("services", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT },
});

const Performers = DataBase.define("performers", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullname: { type: DataTypes.STRING },
  specialization: { type: DataTypes.STRING },
});

const SpareParts = DataBase.define("spareparts", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullname: { type: DataTypes.STRING },
  specialization: { type: DataTypes.STRING },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Orders);
Orders.belongsTo(User);

Performers.hasMany(Orders);
Orders.belongsTo(Performers);

export { User, Basket, Orders, Services, Performers, SpareParts };
