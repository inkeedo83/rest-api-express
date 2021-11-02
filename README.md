## Description

Express.js & Sequelize ORM REST-API example with mysql 

## Installation

```bash
$ npm install
```

## Running the app
```bash
# development

$ npm run start
```
### INFORMATION

need to create test database with users table

```bash
- CREATE DATABASE `test`
- CREATE TABLE `users` (id INTEGER NOT NULL AUTO_INCREMENT, name VARCHAR(100), email VARCHAR(100) unique, age INTEGER, PRIMARY KEY(id),CONSTRAINT users_unique UNIQUE (email));

```