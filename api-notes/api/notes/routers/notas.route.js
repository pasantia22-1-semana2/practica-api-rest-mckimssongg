import express from 'express';
import { NoteController } from '../controllers/note.ctl.js';


const noteController = new NoteController();
const routerNote = express.Router();

// rutas para los modulos


// ruta para obtener todas las notas
routerNote.get('/', noteController.getAllNotes)

// ruta para obtener una sola nota 
routerNote.get('/:id', noteController.getOneNote)

//ruta para hacer post de una nota
routerNote.post('/', noteController.createNewNote)

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