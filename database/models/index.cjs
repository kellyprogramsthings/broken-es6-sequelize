//import { basename as _basename } from 'path';
import Sequelize from 'sequelize';
import config from '../config/config.js';
import page from './page.js';
import user from './user.js';

//const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.js')[env];
const db = {};


const config = config[env];

let sequelize = new Sequelize(config.url, config);

// readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     //const model = require(join(__dirname, file))(sequelize, sequelize.DataTypes);
//     const model = join(__dirname, file)(sequelize, sequelize.DataTypes);
//     db[model.name] = model;
//   });

db[page] = page;
db[user] = user;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;