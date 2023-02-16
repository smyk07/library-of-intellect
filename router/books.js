const express = require('express');
const router = express.Router();
const fs = require('fs');

const mathsBooks = require('../json/Maths');
const scienceBooks = require('../json/Science')

router.get('/', (req, res) => {
  res.send('Server Up!');
});

mathsBooks.forEach((book) => {
  router.get(`/maths/${book.id}`, (req, res) => {
    const filePath = `./books/Maths${book.file}`;
    const fileContent = fs.readFileSync(filePath);
    res.setHeader('Content-Disposition', `inline; filename="${book.name}"`);
    res.contentType('application/pdf');
    res.send(fileContent);
  });

  router.get(`/maths/${book.key}`, (req, res) => {
    const filePath = `./books/Maths${book.file}`;
    const fileContent = fs.readFileSync(filePath);
    res.setHeader('Content-Disposition', `inline; filename="${book.name}"`);
    res.contentType('application/pdf');
    res.send(fileContent);
  });
});

scienceBooks.forEach((book) => {
  router.get(`/science/${book.id}`, (req, res) => {
    const filePath = `./books/Science${book.file}`;
    const fileContent = fs.readFileSync(filePath);
    res.setHeader('Content-Disposition', `inline; filename="${book.name}"`);
    res.contentType('application/pdf');
    res.send(fileContent);
  });

  router.get(`/science/${book.key}`, (req, res) => {
    const filePath = `./books/Science${book.file}`;
    const fileContent = fs.readFileSync(filePath);
    res.setHeader('Content-Disposition', `inline; filename="${book.name}"`);
    res.contentType('application/pdf');
    res.send(fileContent);
  });
});

module.exports = router;