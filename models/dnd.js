module.exports = function (sequelize, DataTypes) {
  var Dnd = sequelize.define("Dnd", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    input_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    date_input: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Dnd;
};
