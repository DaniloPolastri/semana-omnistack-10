const express = require('express');

const app = express();

app.use(express.json());

// Metodos HTTP: get, post, put, delete

// Tipos de parametros: 
// Query Params: req.query(filtros, ordenacao, paginacao, ....)
// Route Params: req.params (identificar um recurso na alteracao ou remocao) 
// Body: req.body (Dados para criacao ou alteracao de um registro)


// MongoDB

//req oq vem do front
//resp do cliente
app.post('/users', (request,response) => {
    console.log(request.body);
    return response.json({
        message: 'Hello OmniStack'
    });
});

app.listen(3333);