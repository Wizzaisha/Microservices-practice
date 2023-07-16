import { Router } from "express";
import controllers from "../controllers/index.js";


const router = Router();

router.get("/", controllers.getFilms);
router.post("/", controllers.createFilm);
router.put("/", controllers.updateFilm);
router.delete("/", controllers.deleteFilm);

export default router;