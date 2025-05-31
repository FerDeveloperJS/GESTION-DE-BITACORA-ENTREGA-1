class BitacoraController {
    constructor(bitacoraModel) {
        this.bitacoraModel = bitacoraModel;
    }

    async crearBitacora(req, res) {
        try {
            const bitacora = await this.bitacoraModel.createBitacora(req.body.fecha_creacion);
            res.status(201).json({ message: "Bitácora creada", bitacora });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async crearActividad(req, res) {
        try {
            const actividad = await this.bitacoraModel.createActividad(req.body);
            res.status(201).json({ message: "Actividad registrada", actividad });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async listarActividades(req, res) {
        try {
            const actividades = await this.bitacoraModel.getActividades();
            res.status(200).json(actividades);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = BitacoraController;