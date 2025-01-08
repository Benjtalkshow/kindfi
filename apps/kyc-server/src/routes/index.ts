import { drizzle } from "drizzle-orm/node-postgres";
import { Application } from "express";
import IndexController from "../controllers";

function setRoutes(app: Application, db: ReturnType<typeof drizzle>) {
  const indexController = new IndexController();

  app.get("/", indexController.getIndex.bind(indexController));
}

export { setRoutes };
