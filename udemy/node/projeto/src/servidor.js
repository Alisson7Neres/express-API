const porta = 3003

const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParse.urlencoded({
    extended: true
}))

app.get('/produtos',(req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(res, req, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) // JSON
})

app.get('/produtos',(req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})