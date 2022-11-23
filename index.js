import express from "express";
import cors from "cors";
import winston from "winston";
import clientesRouter from "./routes/cliente.route.js";
import autoresRouter from "./routes/autores.route.js";
import livrosRouter from "./routes/livros.route.js";
import vendasRouter from "./routes/vendas.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "editora-api.log" }),
  ],
  format: combine(label({ label: "editora-api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/cliente", clientesRouter);
app.use("/autores", autoresRouter);
app.use("/livros", livrosRouter);
app.use("/vendas", vendasRouter);
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(8080, () => console.log("SUBIU PAEEE"));
