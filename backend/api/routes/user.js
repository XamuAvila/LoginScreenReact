const connection = require('../database/index')
const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
router.use(express.json());

// router.get('/user', async (req, res) => {
//     try {
//         var users = await connection.query(`
//             SELECT * FROM users;
//         `);

//         console.log(users[0]);
//         res.status(200).send(users[0]);
//     } catch (error) {
//         res.status(400).send();
//     }
// })

router.post('/user/register', async (req, res) => {
    try {
        var email = req.body.email;
        var password = req.body.password;
        var exists = await connection.query(`SELECT * FROM users where email = '${email}'`, { type: sequelize.QueryTypes.SELECT });
        if (exists.length)
            throw "Usuário já cadastrado ou inválido";

        await connection.query(`
            INSERT INTO USERS(email, password) VALUES('${email}', '${password}')
        `);
        res.status(200).send("Usuário cadastrado com sucesso").json();
    } catch (error) {
        res.status(400).send(error).json();
    }
})

router.post('/user/login', async (req, res) => {
    try {
        var email = req.body.email;
        var password = req.body.password;
        var exists = await connection.query(`SELECT * FROM users where email = '${email}' and password = '${password}'`, { type: sequelize.QueryTypes.SELECT });
        if (!exists.length || email == '' || password == '')
            throw "Usuário inexistente ou Dados de Login Incorretos";
        res.status(200).send("Logado com sucesso!");
    } catch (error) {
        res.status(400).send(error);
    }
})



module.exports = router;
