import { Router } from "express";
import controllers from "../controllers/index.js";
import middlewares from "../middlewares/index.js";

const router = Router();

router.get("/", controllers.getCharacters);
router.post("/", middlewares.charactersValidation, controllers.createCharacters);
router.put("/", controllers.updateCharacters);
router.delete("/", controllers.deleteCharacter);

export default router;