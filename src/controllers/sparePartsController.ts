/** @format */

import { Request, Response } from "express";
import { SpareParts } from "../models/models";

class SparePartsCreate {
  async create(req: Request, res: Response) {
    try {
      const { name, description, price } = req.body;
      const create = await SpareParts.create({ name, description, price });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await SpareParts.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await SpareParts.findOne({ where: { id: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await SpareParts.destroy({ where: { id: id } });
      res.status(200).json({ messege: "модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new SparePartsCreate();
