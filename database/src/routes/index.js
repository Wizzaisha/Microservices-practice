import { Router } from "express";
import middlewares from "../middlewares/index.js";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/:model", middlewares.validateModel, controllers.getData);
router.post("/:model", middlewares.validateModel, controllers.createOne);
router.put("/:model", middlewares.validateModel, controllers.updateData);
router.delete("/:model", middlewares.validateModel, controllers.deleteOne);


export default router;