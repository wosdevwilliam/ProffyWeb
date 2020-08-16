import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());


//Metódos
//GET: Buscar
//POST: Criar
//PUT: Atualizar
//DELETE: Deletar

//Parâmetros

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenção
app.use(express.json());
app.use(routes);

//definindo a porta
app.listen(3333);