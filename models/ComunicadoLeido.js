const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComunicadoLeidoSchema = new Schema({
    fk_id_responsable: { type: Schema.Types.ObjectId, ref: 'Responsable', required: true },
    fk_id_comunicado: { type: Schema.Types.ObjectId, ref: 'Comunicado', required: true },
    leido: { type: Boolean, default: false }
});

module.exports = mongoose.model('ComunicadoLeido', ComunicadoLeidoSchema);
