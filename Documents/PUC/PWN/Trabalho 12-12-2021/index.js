const express = require('express');

const server = express();

server.use(express.json());


const produtos = {
    produtos: [
        { id: 0, descricao: 'Galaxy S10', valor: 1890.00 },
        { id: 1, descricao: 'Galaxy S20', valor: 2790.90 },
        { id: 2, descricao: 'Galaxy S21', valor: 3900.00 },
        { id: 3, descricao: 'Galaxy Watch Active 4', valor: 1700.00 },
        { id: 4, descricao: 'Galaxy Buds Live', valor: 730.00 },
    ]
};

//Retorna produtos
server.get('/produtos/:index', (req, res) => {
    const { index } = req.params;

    console.log(produtos.produtos[index]);
    return res.json(produtos.produtos[index]);
});

//retorna todos os dados
server.get('/produtos', (req, res) => {
    console.log(produtos.produtos);
    return res.json(produtos);
});

//criar um novo produto
server.post('/produtos', (req, res) => {
    const id = req.body.id;
    const descricao = req.body.descricao;
    const valor = req.body.valor;

    jsonProduto = {
        "id": id,
        "descricao": descricao,
        "valor": valor
    }
    
    produtos.produtos.push(jsonProduto);
    return res.json(produtos);
});

//Atualizar produto
server.put('/produtos/:index', (req, res) => {
    const { index } = req.params;
    
    const id = req.body.id;
    const descricao = req.body.descricao;
    const valor = req.body.valor;

    jsonProduto = {
        "id": id,
        "descricao": descricao,
        "valor": valor
    }
    

    produtos.produtos[index] = jsonProduto;

    return res.json(produtos);
});

//Excluir produto
server.delete('/produtos/:index', (req, res) => {
    const { index } = req.params;

    produtos.splice(index, 1);
    return res.json({ message: "O produto foi excluido" });
});

server.listen(8080);