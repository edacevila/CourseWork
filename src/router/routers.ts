/** @format */

import { Router } from "express";
import PerformersCreate from "../controllers/performersController";
import SparePartsCreate from "../controllers/sparePartsController";

const router = Router();

router.post("/performerscreate", PerformersCreate.create);
router.get("/performersgetall", PerformersCreate.getAll);
router.delete("/performersdelete", PerformersCreate.delete);

router.post("/sparepartscreate", SparePartsCreate.create);
router.get("/sparepartsgetall", SparePartsCreate.getAll);
router.get("/sparepartsgetone", SparePartsCreate.getOne);
router.delete("/sparepartsdelete", SparePartsCreate.delete);

export default router;
