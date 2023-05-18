/** @format */

import { Request, Response } from "express";
import { Orders } from "../models/models";

class OrdersCreate {
  async create(req: Request, res: Response) {
    try {
      const { userId, performersId, data, description, price } = req.body;
      const create = await Orders.create({
        userId,
        performersId,
        data,
        description,
        price,
      });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Orders.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await Orders.findOne({ where: { id: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await Orders.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new OrdersCreate();
