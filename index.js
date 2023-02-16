const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 
const morgan = require('morgan'); 

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');

const router = require('./router/router.js')
const booksRouter = require('./router/books.js')
app.use('/', router)
app.use('/books', booksRouter)

const port = 3000;
app.listen(port, () => {
     console.log(`Express API Running on port ${port}`);
}); 