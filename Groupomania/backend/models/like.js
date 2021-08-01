const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Like.belongsTo(
        models.User, //to attach the like to the user who posted it
        {
          foreignKey: {
            allowNull: false,
          },
          onDelete: "CASCADE",
        }
      ),
        models.Like.belongsTo(
          models.Post, //to attach the like to the post which been liked
          {
            foreignKey: {
              allowNull: false,
            },
            onDelete: "CASCADE",
          }
        );
    }
  }
  Like.init(
    {},
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
