# Express App Template

Basic, but useful Express JS starter app template to build RESTful APIs. This template includes express, morgan, prettier as the formater, and Prisma 2 as the ORM. 

## Contains

- Useful packages:
  - Express
  - Morgan
  - Body parser
- ORM:
  - [Prisma 2](https://www.prisma.io)
- Development packages:
  - Nodemon

## Scritps

- Executes nodemon

```bash
  npm run dev
```

- Executes prettier

```bash
  npm run format
```

## Setup and configuration

Prisma is configured (in this template) to use a SQLite3 database and Express Session needs a session name and a session secret, create a .env file at the root of the project and put the follwing content on it:

```py
DATABASE_URL="file:./app.db"
SESSION_NAME="appName"
SESSION_SECRET="secret"
```

Prisma needs one command to be fully functional ([Prisma Docs](https://www.prisma.io/docs)).

```bash
npx prisma migrate dev --name init --preview-feature
```
