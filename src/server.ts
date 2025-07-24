import express from 'express';
import dotenv from 'dotenv'
import mustache from "mustache-express";
import path from "path";
import mainRoutes from './routes/index'

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')))

// Rotas
server.use(mainRoutes);
server.use((req, res) => {
    res.render('pages/404');
})

const PORT = process.env.PORT || 3000;
console.log("server started on port:", PORT);

server.listen(PORT);