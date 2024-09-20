import express from 'express';
import { BibliotecaController } from "./controller/biblioteca.controller";

const biblioteca = new BibliotecaController();
const routes = express.Router();

routes.get('/listarlivros', biblioteca.listarLivros); 
routes.get('/listarlivros/:id', biblioteca.listarLivros); 
routes.post('/adicionarlivros', biblioteca.adicionarLivro); 
routes.put('/editarlivros/:id', biblioteca.editarLivro); 
routes.delete("/deletarlivros/:id", biblioteca.deletarLivro); 

export default routes;