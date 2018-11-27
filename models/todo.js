
module.exports = function(sequelize, DataTypes) {
  let Todo = sequelize.define("Todo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    item: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Todo;
};