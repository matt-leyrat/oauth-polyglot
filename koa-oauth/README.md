# Oauth Polyglot
This is a collection of implementations of authentication servers using modern technology in various programming languages like Node.js, Python, Java, C#, Go, and Rust.

## Requirements
The server should use a JWT (JSON Web Token) flow for authentication.
User credentials should be stored in a database with passwords hashed using a salt and pepper approach.
The focus was initially on the back-end implementation, but the plan was to also include a barebones GUI for registration and login in each language.

## Progress
We started by setting up the Node.js implementation using the Koa framework and TypeScript. The project structure and dependencies were established, including:
- Koa for the web framework
- TypeScript for static typing
- PostgreSQL as the database, running in a Docker container
- Sequelize as the ORM for interacting with the database
- ESLint and Prettier for code linting and formatting

## Misc notes
The goal was to implement the user registration functionality first, including:
- Defining the user model and database schema
- Creating a registration route
- Implementing secure password hashing using bcrypt
- Creating a new user record in the database

## Moving forward
After completing the user registration, the plan was to move on to implementing the login flow, JWT token generation and verification, and protecting routes that require authentication.
The overall objective was to gain experience with different ecosystems and technologies while building an impressive portfolio piece showcasing secure authentication implementations across multiple programming languages.