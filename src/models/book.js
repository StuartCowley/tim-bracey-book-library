module.exports = (connection, DataTypes) => {
  const schema = {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'A book title is required',
        },
        notEmpty: {
          args: [true],
          msg: 'A book title cannot be empty',
        },
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'A book author is required',
        },
        notEmpty: {
          args: [true],
          msg: 'A book author cannot be empty',
        },
      },
    },
    ISBN: DataTypes.STRING,
  };

  const BookModel = connection.define('Book', schema);
  return BookModel;
};