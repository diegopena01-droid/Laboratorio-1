import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CustomError } from "../../../domain/erros/custom.error";
import { TrayectoriaService } from "./trayectoria.service";

export class TrayectoriaController {

  private readonly trayectoriaService = new TrayectoriaService();

  getAll = (req: Request, res: Response): void => {
    this.trayectoriaService.getAll()
      .then((records) => res.status(200).json(records))
      .catch((error) => HandleError.error(error, res));
  };

  getByEstudianteId = (req: Request, res: Response): void => {
    const estudianteId = Number(req.params.estudianteId);
    if (isNaN(estudianteId)) {
      HandleError.error(CustomError.badRequest("El ID del estudiante debe ser numérico"), res);
      return;
    }

    this.trayectoriaService.getByEstudianteId(estudianteId)
      .then((records) => res.status(200).json(records))
      .catch((error) => HandleError.error(error, res));
  };

  getByCategoria = (req: Request, res: Response): void => {
    const estudianteId = Number(req.params.estudianteId);
    const categoria = req.params.categoria;

    if (isNaN(estudianteId)) {
      HandleError.error(CustomError.badRequest("El ID del estudiante debe ser numérico"), res);
      return;
    }

    if (!categoria) {
      HandleError.error(CustomError.badRequest("La categoría es requerida"), res);
      return;
    }

    this.trayectoriaService.getByCategoria(estudianteId, categoria)
      .then((records) => res.status(200).json(records))
      .catch((error) => HandleError.error(error, res));
  };

}