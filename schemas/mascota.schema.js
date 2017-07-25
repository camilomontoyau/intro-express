const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collectionName = 'requisitos';

if(!process.env.migrate) {
  var autoIncrement = require('mongoose-auto-increment');
}

const dynamicSchema = new Schema(
  {
    nomrequisito: {
      type: String,
      required: [true, 'No puede estar vacío']
    },
    descripcion: {
      type: String
    }
  },
  {
    strict: true,
    timestamps: true
  }
);

if(!process.env.migrate) {
  dynamicSchema.plugin(autoIncrement.plugin, {
    model: collectionName,
    startAt: 8,
    incrementBy: 1
  });
}
module.exports = mongoose.model(collectionName, dynamicSchema);