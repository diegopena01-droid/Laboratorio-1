import { Router } from "express";
import { CvRoutes } from "./modules/cv/cv.routes";
import { TrayectoriaRoutes } from "./modules/trayectoria/trayectoria.routes";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // Rutas del proyecto
    apiRouter.use("/cv", CvRoutes.routes);
    apiRouter.use("/trayectoria", TrayectoriaRoutes.routes);

    router.use("/api", apiRouter);

    return router;
  }
}