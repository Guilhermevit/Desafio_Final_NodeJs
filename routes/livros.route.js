import express from "express";
import livrosController from "../controllers/livros.controller.js";

const router = express.Router();

router.post("/", livrosController.createLivros);
router.get("/", livrosController.getLivros);
router.get("/:id", livrosController.getLivross);
router.delete("/:id", livrosController.deleteLivros);
router.put("/", livrosController.updateLivros);

export default router;
