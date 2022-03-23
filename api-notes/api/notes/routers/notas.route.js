import express from 'express';


const routerNote = express.Router();

// rutas para los modulos


// ruta para obtener todas las notas
routerNote.get('/', (req,res)=>{
    res.json({
        message:"Estas en la ruta get"
    })
})

// ruta para obtener una sola nota 
routerNote.get('/:id', (req, res)=>{
    res.json({
        message:"Estas en la ruta get de una sola nota"
    })
})

//ruta para hacer post de una nota
routerNote.post('/', (req, res)=>{
    res.json({
        message:"Estas en la ruta post de una sola nota"
    })
})

//ruta para actualizar notas
routerNote.put('/:id', (req, res)=>{
    res.json({
        message:"Estas en la ruta put de una sola nota"
    })
})

//ruta para eliminar una sola nota
routerNote.delete('/:id', (req, res)=>{
    res.json({
        message:"Estas a delet de una nota"
    })
})

export default routerNote;