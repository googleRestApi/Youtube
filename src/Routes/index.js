import {Router} from "express";
import rutacanal from "./routes.rutaCanal.js";

const ruta = Router();

ruta.use("/", rutacanal);

export default ruta;