const router = require("express").Router();
const {Usuario} = require('../../db');
const {check, validationResult} = require('express-validator');
const e = require("express");

router.get('/:id', async(req, res)=>{
    const usuario = await Usuario.findOne({
        where:{ id: req.params.id}
    });
    res.json(usuario);
});


router.get('/', async (req, res)=>{
    
    res.send('ALUMNOS');
});

router.get('/get-all', async (req, res)=>{
    const alumnos = await Usuario.findAll();
    res.json(alumnos);
});



//router.post('/registar', [
//    check('nombre', 'El nombre del alumno es obligatorio').not().isEmpty()
//], async(req, res,)=>{
//    const errors = validationResult(req);
//    if(!errors.isEmpty() ){
//        return res.status(422).json({errores: errors.array()})
//    }
//
//
//    const alumno = await Usuario.create(req.body);
//    res.json(alumno);
//});

router.post('/registrar', async(req, res,)=>{
    console.log(req.body);
    try {
        const alumno = await Usuario.create(req.body);
        res.json(alumno);
        
    } catch (error) {
        console.log(error);
        res.send("Esta mal weon");
    }
});

router.get('/login/:userName/:password', async(req, res)=>{
    const{userName, password} = req.params;

    //const userName = req.params.userName;
    //const password = req.params.password;

    //{ userName, password }
    
    

    const usuario = await Usuario.findOne({  where:{ 'userName':userName, 'password':password } });
    if (usuario === null) {
        console.log('Not found!');
        return res.status(404).json({msg: 'Usuario o Contraseña incorrectos' })
    }
    res.json(usuario);
});

router.put('/:id', async(req, res)=>{
    await Usuario.update(req.body, {
        where:{ id: req.params.id}
    });

    res.send('Registro Actualizado');
});


router.get('/:id', async(req, res)=>{
    const usuario = await Usuario.findOne({  where:{ id: req.params.id} });
    if (usuario === null) {
        console.log('Not found!');
        return res.status(404).json({msg: 'Usuario No encontrado' })
    }
    res.json(usuario);
});


router.delete('/:id', async(req, res)=>{
    await Usuario.destroy({
        where:{ id: req.params.id}
    });

    res.send("Registro eliminado");
});

module.exports=router;

