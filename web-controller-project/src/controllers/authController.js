class AuthController {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async register(req, res) {
        const { nombre, email, contrasena } = req.body;
        try {
            const newUser = await this.userModel.createUser(nombre, email, contrasena);
            res.status(201).json({ message: "Usuario registrado correctamente", user: newUser });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        const { email, contrasena } = req.body;
        try {
            const user = await this.userModel.authenticateUser(email, contrasena);
            if (user) {
                res.status(200).json({ message: "Login exitoso", user });
            } else {
                res.status(401).json({ message: "Email o contraseña incorrectos" });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = AuthController;