const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const path = require('path');
const { log } = require('console');
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/ma_base_de_donnees')
    .then(()=> console.log(`✅ Connexion à MongoDB réussie!`))
    .catch(err => console.error(`Erreur de connexion à MongoDB`, err));

app.post('/add-user', async (req,res)=>{
    try{
        console.log(req.body);
        const newUser = await User.create(req.body);
        res.send(`✅ Utilisateur ajouté avec succès : ` + newUser.nameDev);
    } catch(err){
        res.status(400).send(`❌ Erreur lors de la création : ` + err.message);
    }

});

app.listen(port, ()=>{
    console.log(`Serveur connecté sur le port ${port}`);
});