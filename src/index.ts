import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { mongooseConnect } from "./middleware/DBMiddleware";
import DeliveryRouter from "./routes/delivery.routes";
import { requestLogger } from './middleware/requestLogger';
import { config } from "./config/config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3003;

mongooseConnect();

app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
  console.log(config.customerServiceUrl);
  console.log(config.orderServiceUrl);
  console.log(config.kitchenServiceUrl);
  console.log(config.deliveryServiceUrl);
});



app.use("/deliveries", DeliveryRouter);
