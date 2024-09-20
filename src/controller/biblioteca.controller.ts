import {Request, Response} from 'express';
import pool from '../conexao';
export class BibliotecaController{
    listarLivros = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            let query = 'select * from livros';
            let values = [];
            
            if (id) {
                query += ' where id = $1';
                values.push(id);
            }
            
            const result = await pool.query(query, values);
            return res.send(result.rows);
        } catch (error) {
            return res.status(500).json((error as Error).message);
        }
    }
     adicionarLivro = async (req: Request, res: Response) => {
        try {
            const {titulo,autor_id} = req.body;
            const insercao = "insert into livros(titulo,autor_id) values($1, $2)";
            const valores = [titulo, autor_id];
            await pool.query(insercao, valores);
            return res.status(201).json("Livro adicionado com sucesso");
        } catch (error) {
            res.status(500).json((error as Error).message);
        }
    }
     editarLivro = async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const {titulo, autor_id} = req.body;
            const atualizar = `update livros set titulo = $1, autor_id = $2 where id = $3 `;
            const dados = [titulo, autor_id,id];
            await pool.query(atualizar,dados);
            return res.status(200).json("Livro atualizado com sucesso");
        } catch (e){
            return res.status(500).json((e as Error).message);
        }
    }
      deletarLivro = async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
        const deletar = ` delete from livros where id = $1`;
        const dados = [id];
        await pool.query(deletar,dados);
        return res.status(200).json("Livro deletado com sucesso");
        } catch (error) {
            return res.status(500).json((error as Error).message);
        }
        
    }
}
