import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", controllers.createPlanet);
router.put("/", controllers.updatePlanet);
router.delete("/", controllers.deletePlanet);

export default router;