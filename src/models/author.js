module.exports = (connection, DataTypes) => {
  const schema = {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [1],
          msg: "Author cannot be empty",
        },
      },
    },
  };

  const AuthorModel = connection.define('Author', schema);
  return AuthorModel;
};