module.exports = (connection, DataTypes) => {
  const schema = {
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [1],
          msg: "Genre cannot be empty",
        },
      },
    },
  };

  const GenreModel = connection.define('Genre', schema);
  return GenreModel;
};