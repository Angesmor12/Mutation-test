const express = require('express');
const {router} = require('./routes/routes.js')

const app = express();

// Middleware para aceptar archivos json.
app.use(express.json());

port = 4000;

app.use(router)

app.listen(port, ()=>{
    console.log("Server listening on port " + port)
});

