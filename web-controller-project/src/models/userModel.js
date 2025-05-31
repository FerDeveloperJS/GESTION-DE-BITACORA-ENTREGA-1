const pool = require('../db/pgClient');

class UserModel {
    static async createUser(nombre, email, contrasena) {
        try {
            const result = await pool.query(
                'INSERT INTO "Supervisores" (nombre, email, contrasena) VALUES ($1, $2, $3) RETURNING id_supervisor, nombre, email',
                [nombre, email, contrasena]
            );
            return result.rows[0];
        } catch (err) {
            if (err.code === '23505') throw new Error("Email already registered");
            throw err;
        }
    }

    static async authenticateUser(email, contrasena) {
        const result = await pool.query(
            'SELECT id_supervisor, nombre, email FROM "Supervisores" WHERE email = $1 AND contrasena = $2',
            [email, contrasena]
        );
        return result.rows[0];
    }
}

module.exports = UserModel;