import express from "express";
import vendasController from "../controllers/vendas.controller.js";

const router = express.Router();

router.post("/", vendasController.createVendas);
router.get("/", vendasController.getVendass);
router.get("/:id", vendasController.getVendas);
router.delete("/:id", vendasController.deleteVendas);
router.put("/", vendasController.updateVendas);

export default router;
