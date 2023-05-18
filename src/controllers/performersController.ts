/** @format */

import { Request, Response } from "express";
import { Performers } from "../models/models";

class PerformersCreate {
  async create(req: Request, res: Response) {
    try {
      const { fullname, specialization } = req.body;
      const create = await Performers.create({ fullname, specialization });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Performers.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await Performers.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new PerformersCreate();
