/** @format */

import { Router } from "express";
import PerformersCreate from "../controllers/performersController";
import SparePartsCreate from "../controllers/sparePartsController";
import ServicesCreate from "../controllers/servicesController";
import OrdersCreate from "../controllers/ordersController";
import UserController from "../controllers/userController";
import auth from "../middleware/authMiddleware";
import role from "../middleware/roleMiddleware";

const router = Router();

router.post("/performerscreate", role, PerformersCreate.create);
router.get("/performersgetall", PerformersCreate.getAll);
router.delete("/performersdelete", PerformersCreate.delete);

router.post("/sparepartscreate", role, SparePartsCreate.create);
router.get("/sparepartsgetall", SparePartsCreate.getAll);
router.get("/sparepartsgetone", SparePartsCreate.getOne);
router.delete("/sparepartsdelete", SparePartsCreate.delete);

router.post("/servicescreate", role, ServicesCreate.create);
router.get("/servicesgetall", ServicesCreate.getAll);
router.get("/servicesgetone", ServicesCreate.getOne);
router.delete("/servicesdelete", ServicesCreate.delete);

router.post("/orderscreate", OrdersCreate.create);
router.get("/ordersgetall", OrdersCreate.getAll);
router.get("/ordersgetone", OrdersCreate.getOne);
router.delete("/ordersdelete", OrdersCreate.delete);

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/update", UserController.update);
router.get("/check", auth, UserController.check);

export default router;
