import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/characters", routes);

server.use("*", (req, res) => {
    res.status(404).send("Not found");
});

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    });
});

export default server;