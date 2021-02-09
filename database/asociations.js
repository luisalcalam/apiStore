const Cup = require('./models/Cup');
const Color = require('./models/Color');
const Type = require('./models/Type');

Type.hasMany(Cup);
Cup.belongsTo(Type);

Color.hasMany(Cup);
Cup.belongsTo(Color);