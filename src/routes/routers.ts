/** @format */

import { Router } from "express";
import PerformersCreate from "../controllers/performersController";
import SparePartsCreate from "../controllers/sparePartsController";
import ServicesCreate from "../controllers/servicesController";

const router = Router();

router.post("/performerscreate", PerformersCreate.create);
router.get("/performersgetall", PerformersCreate.getAll);
router.delete("/performersdelete", PerformersCreate.delete);

router.post("/sparepartscreate", SparePartsCreate.create);
router.get("/sparepartsgetall", SparePartsCreate.getAll);
router.get("/sparepartsgetone", SparePartsCreate.getOne);
router.delete("/sparepartsdelete", SparePartsCreate.delete);

router.post("/servicescreate", ServicesCreate.create);
router.get("/servicesgetall", ServicesCreate.getAll);
router.get("/servicesgetone", ServicesCreate.getOne);
router.delete("/servicesdelete", ServicesCreate.delete);

export default router;
