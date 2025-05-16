import helmet from "helmet";
import express, {json} from "express";
import "express-async-errors";
import { routes } from "../src/router/routes";


export const app = express();

app.use(helmet());

app.use(json());


app.use(routes);
