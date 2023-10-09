const { expect } = require('chai');
const request = require('supertest');
const { Genre } = require('../src/models');
const app = require('../src/app');

describe('/genres', () => {
  before(async () => Genre.sequelize.sync());

  afterEach(async () => {
    await Genre.destroy({ where: {} });
  });

  describe('with no records in the database', () => {
    describe('POST /genres', () => {
      it('creates a new genre in the database', async () => {
        const response = await request(app).post('/genres').send({
          genre: 'Horror'
        });
        const newGenreRecord = await Genre.findByPk(response.body.id, { raw: true,
        });

        expect(response.status).to.equal(201);
        expect(response.body.genre).to.equal('Horror');

        expect(newGenreRecord.genre).to.equal('Horror');
        expect(newGenreRecord.id).to.equal(response.body.id);
        expect(newGenreRecord.genre).to.exist;
      });
    });
  });

  describe('with records in the database', () => {
    let genres;

    beforeEach(async () => {
      genres = await Promise.all([
        Genre.create({ genre: 'Horror' }),
        Genre.create({ genre: 'Autobiography' }),
        Genre.create({ genre: 'Fantasy' }),
      ]);
    });

    describe('GET /genres', () => {
      it('gets genre by genre name', async () => {
        const response = await request(app).get(`/genres/${genres[0].genre}`);

        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(1);
        const [ genreObj ] = response.body;
        expect(genreObj.genre).to.equal(genres[0].genre);
      });

      it('returns a 404 if the genre does not exist', async () => {
        const response = await request(app).get('/genres/fakegenre');

        expect(response.status).to.equal(404);
        expect(response.body.error).to.equal('The genre could not be found.');
      });
    });
  });
});