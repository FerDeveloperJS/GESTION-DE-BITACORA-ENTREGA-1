const pool = require('../db/pgClient');

class BitacoraModel {
    static async createBitacora(fecha_creacion) {
        const result = await pool.query(
            'INSERT INTO "Bitacoras" (fecha_creacion) VALUES ($1) RETURNING *',
            [fecha_creacion]
        );
        return result.rows[0];
    }

    static async createActividad({ id_bitacora, id_supervisor, fechaHora, descripcion, responsable, condicionesClimaticas }) {
        const result = await pool.query(
            `INSERT INTO "Actividades" (id_bitacora, id_supervisor, fechaHora, descripcion, responsable, condicionesClimaticas)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [id_bitacora, id_supervisor, fechaHora, descripcion, responsable, condicionesClimaticas]
        );
        return result.rows[0];
    }

    static async getActividades() {
        const result = await pool.query(
            `SELECT a.*, s.nombre AS supervisor_nombre, b.fecha_creacion AS bitacora_fecha
             FROM "Actividades" a
             JOIN "Supervisores" s ON a.id_supervisor = s.id_supervisor
             JOIN "Bitacoras" b ON a.id_bitacora = b.id_bitacora
             ORDER BY a.fechaHora DESC`
        );
        return result.rows;
    }
}

module.exports = BitacoraModel;