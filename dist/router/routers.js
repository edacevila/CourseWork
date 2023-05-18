"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var performersController_1 = __importDefault(require("../controllers/performersController"));
var sparePartsController_1 = __importDefault(require("../controllers/sparePartsController"));
var servicesController_1 = __importDefault(require("../controllers/servicesController"));
var router = (0, express_1.Router)();
router.post("/performerscreate", performersController_1.default.create);
router.get("/performersgetall", performersController_1.default.getAll);
router.delete("/performersdelete", performersController_1.default.delete);
router.post("/sparepartscreate", sparePartsController_1.default.create);
router.get("/sparepartsgetall", sparePartsController_1.default.getAll);
router.get("/sparepartsgetone/:id", sparePartsController_1.default.getOne);
router.delete("/sparepartsdelete", sparePartsController_1.default.delete);
router.post("/servicescreate", servicesController_1.default.create);
router.get("/servicesgetall", servicesController_1.default.getAll);
router.get("/servicesgetone/:id", servicesController_1.default.getOne);
router.delete("/servicesdelete", servicesController_1.default.delete);
exports.default = router;
