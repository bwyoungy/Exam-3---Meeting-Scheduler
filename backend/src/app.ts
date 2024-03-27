import cors from "cors";
import express from "express";
import routeNotFound from "./middleware/route-not-found";
import catchAll from "./middleware/catch-all";
import appConfig from "./utils/app-config";
import meetingsController from "./controllers/meetings-controller";

const server = express();
server.use(cors());
server.use(express.json());

server.use("/api", meetingsController);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port,()=>console.log(`Listening on http://localhost:${appConfig.port}`));