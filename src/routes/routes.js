const express = require('express')
const {mutationHandler,getMutationsHandler} = require('../handlers/handle.js')

const router = express.Router()

// Obtiene el ADN, verifica si está mutado y guarda el ADN en la base de datos, siempre y cuando no se encuentre en la base de datos.
router.post('/mutation/', mutationHandler)

// Obtiene todos los registros de la base de datos y devuelve los ADN mutados y no mutados.
router.get('/stats/', getMutationsHandler)


module.exports = {router}