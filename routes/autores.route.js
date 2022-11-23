import express from "express";
import autoresController from "../controllers/autores.controller.js";

const router = express.Router();

router.post("/", autoresController.createAutores);
router.get("/", autoresController.getAutores);
router.get("/:id", autoresController.getAutor);
router.delete("/:id", autoresController.deleteAutores);
router.put("/", autoresController.updateAutores);

export default router;
