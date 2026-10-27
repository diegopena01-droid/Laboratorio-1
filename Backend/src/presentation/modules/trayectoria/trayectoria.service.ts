import { pool } from "../../../config/database";
import { CvTrayectoria } from "../../../domain/interfaces/cv.interface";

export class TrayectoriaService {

  public async getAll(): Promise<CvTrayectoria[]> {
    const sql = `SELECT * FROM cv_trayectoria ORDER BY id ASC;`;
    const result = await pool.query(sql);
    return result.rows;
  }

  public async getByEstudianteId(estudianteId: number): Promise<CvTrayectoria[]> {
    const sql = `SELECT * FROM cv_trayectoria WHERE estudiante_id = $1 ORDER BY id ASC;`;
    const result = await pool.query(sql, [estudianteId]);
    return result.rows;
  }

  public async getByCategoria(estudianteId: number, categoria: string): Promise<CvTrayectoria[]> {
    const sql = `SELECT * FROM cv_trayectoria WHERE estudiante_id = $1 AND categoria = $2 ORDER BY id ASC;`;
    const result = await pool.query(sql, [estudianteId, categoria.toUpperCase()]);
    return result.rows;
  }

}