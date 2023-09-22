const { expect } = require('chai');
const request = require('supertest');
const { Author } = require('../src/models');
const app = require('../src/app');

describe('/authors', () => {
  before(async () => Author.sequelize.sync());

  beforeEach(async () => {
    await Author.destroy({ where: {} });
  });

  describe('with no records in the database', () => {
    describe('POST /authors', () => {
      it('creates a new author in the database', async () => {
        const response = await request(app).post('/authors').send({
          author: 'Stephen King'
        });
        const newAuthorRecord = await Author.findByPk(response.body.id, {
          raw: true,
        });

        expect(response.status).to.equal(201);
        expect(response.body.author).to.equal('Stephen King');

        expect(newAuthorRecord.author).to.equal('Stephen King');
        expect(newAuthorRecord.id).to.equal(response.body.id);
        expect(newAuthorRecord.author).to.exist;
      });
    });
  });

  describe('with records in the database', () => {
    let authors;

    beforeEach(async () => {
      authors = await Promise.all([
        Author.create({ author: 'Stephen King' }),
        Author.create({ author: 'Dave Grohl' }),
        Author.create({ author: 'Matthew Perry' }),
      ]);
    });

    describe('GET /authors', () => {
      it('gets author by author name', async () => {
        const response = await request(app).get(`/authors/${authors[0].author}`);

        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(1);
        const [ authorObj ] = response.body;
        expect(authorObj.author).to.equal(authors[0].author);
      });

      it('returns a 404 if the author does not exist', async () => {
        const response = await request(app).get('/authors/fakeauthor');

        expect(response.status).to.equal(404);
        expect(response.body.error).to.equal('The author could not be found.');
      });
    });
  });
});