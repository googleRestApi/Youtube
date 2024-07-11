import express from "express";
import ruta from "./Routes/index.js";

const server = express();

server.set("port", process.env.PORT || 4550);
server.use("/", ruta);

export default server;