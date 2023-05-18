/** @format */

import { Request, Response } from "express";
import { Services } from "../models/models";

class ServicesCreate {
  async create(req: Request, res: Response) {
    try {
      const { name, description, price } = req.body;
      const create = await Services.create({ name, description, price });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Services.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await Services.findOne({ where: { id: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await Services.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new ServicesCreate();
