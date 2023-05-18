/** @format */

import { User, Basket } from "../models/models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateJwt = (id: number, email: string, role: string) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "3h",
  });
};

class UserController {
  async registration(req: Request, res: Response) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "He указан email или password" });
    }
    const finduser = await User.findOne({ where: { email } });
    if (finduser) {
      return res
        .status(400)
        .json({ message: "Пользователь c таким email уже существует" });
    }
    const hash = await bcrypt.hash(password, 5);
    const usercreate = await User.create({ email, role, password: hash });
    await Basket.create({ userId: usercreate.dataValues.id });
    const token = generateJwt(usercreate.dataValues.id, email, role);
    return res.status(200).json({ token });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const usercreate = await User.findOne({ where: { email } });
    if (!usercreate) {
      res.status(403).json({ message: "Пользователь не найден" });
    }
    let comparePassword = bcrypt.compareSync(
      password,
      usercreate.dataValues.password
    );
    if (!comparePassword) {
      res.status(403).json({ message: "Указан неверный пароль" });
    }
    const token = generateJwt(
      usercreate.dataValues.id,
      email,
      usercreate.dataValues.role
    );
    return res.json({ token });
  }

  async update(req: Request, res: Response) {
    const id = req.query.id;
    const { name, number } = req.body;
    const updateUser = await User.update(
      { name: name, number: number },
      { where: { id: id } }
    );
    return res.json(updateUser);
  }

  async check(req: Request, res: Response) {
    res.json({ message: "authorized" });
  }
}

export default new UserController();
