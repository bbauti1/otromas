const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComunicadoPreceptorResponsableSchema = new Schema({
    titulo: { type: String, required: true },
    mensaje: { type: String, required: true },
    fk_id_preceptor: { type: Schema.Types.ObjectId, ref: 'Preceptor', required: true },
    fk_id_responsable: { type: Schema.Types.ObjectId, ref: 'Responsable', required: true },
    fk_id_estudiante: { type: Schema.Types.ObjectId, ref: 'Estudiante', required: true },
    leido: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ComunicadoPreceptorResponsable', ComunicadoPreceptorResponsableSchema);
