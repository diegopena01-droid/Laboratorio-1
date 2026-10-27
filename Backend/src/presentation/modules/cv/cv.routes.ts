import { Router } from "express";
import { CvController } from "./cv.controller";

export class CvRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new CvController();

    router.get("/", controller.getAllEstudiantes);
    router.get("/:id", controller.getEstudianteById);

    return router;
  }

}