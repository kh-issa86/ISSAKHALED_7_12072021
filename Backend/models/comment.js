'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User, //to attach the coment to the user who wrote it
        { foreignKey: {
          allowNull: false
         
        }, onDelete:'CASCADE',
      }),
        models.Comment.belongsTo(models.Post, 
          { foreignKey: {
            allowNull: false,
               
          }, onDelete:'CASCADE',
        })
    }
    
  };
    //difine the comment's model data types
  Comment.init({
    message: { type: DataTypes.TEXT, allowNull: false },
    pseudo: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};