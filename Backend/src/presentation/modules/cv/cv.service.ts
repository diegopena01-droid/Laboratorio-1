import { pool } from "../../../config/database";
import { CvEstudiante } from "../../../domain/interfaces/cv.interface";

export class CvService {

  public async getAllEstudiantes(): Promise<CvEstudiante[]> {
    const sql = `SELECT * FROM cv_estudiantes ORDER BY id ASC;`;
    const result = await pool.query(sql);
    return result.rows;
  }

  public async getEstudianteById(id: number): Promise<CvEstudiante | null> {
    const sql = `SELECT * FROM cv_estudiantes WHERE id = $1;`;
    const result = await pool.query(sql, [id]);
    return result.rows[0] || null;
  }

}