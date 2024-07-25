 import express from "express";
 import bodyParser from "body-parser";
 import filmesRoutes from "../sr/routes/filmeRoutes.js";

 const app = express();
 
 app.use(bodyParser.json());

 app.use('/' ,filmeRoutes);

 
 export default app;