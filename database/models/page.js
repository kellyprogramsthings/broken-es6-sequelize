// import sequelize from 'sequelize';

// //export const page = (sequelize, DataTypes) => {
// module.exports page = (sequelize, DataTypes) => {  
//   class Page extends sequelize.Model {
//     static associate(models) {
//       // define association here
//     }
//   };

//   Page.init({
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     createdAt: { 
//       type: DataTypes.DATE,  
//       allowNull: false, 
//       //defaultValue: Sequelize.NOW,
//       field: "created_at"
//     },
//     updatedAt: { 
//       type: DataTypes.DATE, 
//       allowNull: false, 
//       //defaultValue: Sequelize.NOW,
//       field: "updated_at"
//     }
//   }, {
//     sequelize,
//     modelName: 'pages',
//   });

//   return Page;
// };


import sequelize from 'sequelize';
// this is ridiculous honestly, update your stupid package
const { Model, DataTypes } = sequelize;

export class page extends Model {
  static init(sequelize) {
    super.init({
      title: sequelize.DataTypes.STRING,
      content: DataTypes.STRING,
      createdAt: { 
        type: DataTypes.DATE,  
        allowNull: false, 
        //defaultValue: Sequelize.NOW,
        field: "created_at"
      },
      updatedAt: { 
        type: DataTypes.DATE, 
        allowNull: false, 
        //defaultValue: Sequelize.NOW,
        field: "updated_at"
      }
    }, {
      sequelize,
      modelName: 'pages',
    });
  }
}