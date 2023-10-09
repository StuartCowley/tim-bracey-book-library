# Book Library API

This is a Book Library that was created as a project on the Command Shift Bootcamp.

The aim was to create a REST API that allows a user to create Readers, Books, Genres and Authors, to update these, and also search by Authors and Genres to return a list of books related to them.

PostgreSQL was used as the database language for this project.

A TDD approach was taken with this project.

## Tech & Frameworks

This project uses Node.js, Express.js, and Sequelize. A combination of Mocha, Chai, and Supertest were used for testing the code. I also carried out a small amount of manual testing using Postman and PgAdmin to ensure changes were happening in the database.

## Installation

`npm install` should install everything required for the project once the repo has been cloned

## API

### Authors

#### GET

`/authors`

`/authors/:author`

#### POST

`/authors`

_In the body please include the author name_

##### Example

```json
{
  "author": "Stephen King"
}
```

### Readers

#### GET

`/readers`

`/readers/:id`

#### POST

`/readers`

_In the body please include name, email and password (must be over 8 characters in length)_

##### Example

```json
{
  "name": "Hermione Granger",
  "email": "hermione@hogwarts.com",
  "password": "Ilovebooks"
}
```

#### PATCH

`/readers/:id`

#### DELETE

`/readers/:id`

### Genres

#### GET

`/genres`

`/genres/:genre`

#### POST

`/genres`

_In the body please include genre_

##### Example

```json
{
  "genre": "Horror"
}
```

### Books

#### GET

`/books`

`/books/:id`

#### POST

`/books`

_In the body please include title, and ISBN (optional). You can also include an authorId and genreId_

##### Example

```json
{
  "title": "The Dead Zone",
  "ISBN": "abc123",
  "authorId": 1,
  "genreId": 1
}
```

#### PATCH

`/books`

#### DELETE

`/books`
