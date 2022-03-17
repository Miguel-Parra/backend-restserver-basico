const {response, request} = require('express');

const usuarioGet = (req = request, res = response) => {
    const {q, nombre = 'No name', apikey, page=1, limit} = req.query;
    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}
const usuarioPost = (req, res = response) => {
    res.json({
        msg: 'post API Controlador - Controlador'
    });
}
const usuarioPut = (req, res = response) => {
    const id = req.params.idUsuario;
    const {nombre, edad} = req.body;
    res.json({
        msg: 'put API Controlador',
        // nombre,
        // edad
        id
    });
}
const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete API Controlador'
    });
}
const usuarioPatch = (req, res = response) => {
    res.json({
        msg: 'patch API Controlador'
    });
}


module.exports = {
    usuarioGet,
    usuarioPatch,
    usuarioPut,
    usuarioPost,
    usuarioDelete

}