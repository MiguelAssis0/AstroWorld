const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

// Configuração do Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'AstroWorld',
    password: 'admin',
    port: 5432,
});

// Rota para cadastrar um novo usuário
app.post('/cadaster', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({error: 'Preencha todos os campos'});
    try {

        const verifyEmail = pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const verifyUser = pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if ((await verifyEmail).rowCount > 0) return await res.status(400).json({error: 'Email ja existe'})
        if ((await verifyUser).rowCount > 0) return await res.status(400).json({error: 'Username ja existe'})
        
        const queryText = 'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)';
        const queryValues = [username, email, password];
        await pool.query(queryText, queryValues);
        res.status(201).json({
            user: req.body
        });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'Erro no servidor'});
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({error: 'Preencha todos os campos'});
    try {
        const queryText = 'SELECT * FROM users WHERE email = $1 AND password_hash = $2';
        const queryValues = [email, password];
        const result = await pool.query(queryText, queryValues);
        if (result.rowCount === 0) return res.status(400).json({error: 'Email ou senha incorretos'});
        res.status(200).json({
            user: result.rows[0]
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'Erro no servidor'});
    }
})

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
