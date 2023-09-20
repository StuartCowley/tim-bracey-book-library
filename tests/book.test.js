const { expect } = require('chai');
const request = require('supertest');
const { Book } = require('../src/models');
const app = require('../src/app');

describe('/books', () => {
  before(async () => Book.sequelize.sync());

  beforeEach(async () => {
    await Book.destroy({ where: {} });
  });

  describe('with no records in the database', () => {
    describe('POST /books', () => {
      it('creates a new book in the database', async () => {
        const response = await request(app).post('/books').send({
          title: 'The Dead Zone',
          author: 'Stephen King',
          genre: 'Horror',
          ISBN: 'abc123'
        });

        const newBookRecord = await Book.findByPk(response.body.id, { raw: true, });

        expect(response.status).to.equal(201);
        expect(response.body.title).to.equal('The Dead Zone');
        expect(response.body.author).to.equal('Stephen King');
        expect(newBookRecord.title).to.equal('The Dead Zone');
        expect(newBookRecord.author).to.equal('Stephen King');
      });
    });
  });

  describe('with records in the database', () => {
    let books;

    beforeEach(async () => {
      books = await Promise.all([
        Book.create({
          title: 'The Dead Zone',
          author: 'Stephen King',
          genre: 'Horror',
          ISBN: 'abc123'
        }),
        Book.create({
          title: "Salem's Lot",
          author: 'Stephen King',
          genre: 'Horror',
          ISBN: 'def456'
        }),
        Book.create({
          title: 'Friends, Lovers and the Big Terrible Thing',
          author: 'Matthew Perry',
          genre: 'Autobiography',
          ISBN: 'ghi789'
        }),
      ]);
    });

    describe('GET /books', () => {
      it('gets all books', async () => {
        const response = await request(app).get('/books');

        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(3);

        response.body.forEach((book) => {
          const expected = books.find((a) => a.id === book.id);

          expect(book.title).to.equal(expected.title);
          expect(book.author).to.equal(expected.author);
          expect(book.genre).to.equal(expected.genre);
          expect(book.ISBN).to.equal(expected.ISBN);
        });
      });
    });
  });

});