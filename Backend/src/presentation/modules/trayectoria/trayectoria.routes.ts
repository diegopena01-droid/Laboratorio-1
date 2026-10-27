import { Router } from "express";
import { TrayectoriaController } from "./trayectoria.controller";

export class TrayectoriaRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new TrayectoriaController();

    // Endpoints REST
    router.get("/", controller.getAll);
    router.get("/estudiante/:estudianteId", controller.getByEstudianteId);
    router.get("/estudiante/:estudianteId/categoria/:categoria", controller.getByCategoria);

    return router;
  }

}