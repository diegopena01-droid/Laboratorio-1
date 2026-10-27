import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CustomError } from "../../../domain/erros/custom.error";
import { CvService } from "./cv.service";

export class CvController {

  private readonly cvService = new CvService();

  getAllEstudiantes = (req: Request, res: Response): void => {
    this.cvService.getAllEstudiantes()
      .then((estudiantes) => res.status(200).json(estudiantes))
  };

  getEstudianteById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return;
    }

    this.cvService.getEstudianteById(id)
      .then((estudiante) => {
        if (!estudiante) {
        }
        return res.status(200).json(estudiante);
      })
  };

}