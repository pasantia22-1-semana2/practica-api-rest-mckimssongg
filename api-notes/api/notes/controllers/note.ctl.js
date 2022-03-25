import {Note, NoteModels} from '../models/note.models.js';
import{response} from "../../../response/response.js"

const noteModel = new NoteModels();

export class NoteController{
  constructor(){}


  //metodo para responder la ruta "obtener todas las notas"
  getAllNotes(req, res){
    try{
      let allNotes = noteModel.all();
      // let dataJson = JSON.parse(allNotes)
      response.succes(req,res,allNotes,200);
    }
    catch(e){
      // console.log(e);
      response.error(req,res, null, 500)
    }
  }

  //crear una nueva nota
  async createNewNote(req,res){
    let {title,content,status} = req.body
    try{
      const newNote = new Note(title,content,status);
      let result = await noteModel.save(newNote);
      if ( result === 0 ){
        let message = 'No se ha creado la nota'
        response.error(req,res,message,500)
      }else{
        let messageOk = 'Se ha creado una nueva nota'
        response.succes(req,res,messageOk,200)
      }
    }catch(e){
      // console.log(e)
      response.error(req,res,null,500)
    }
  }

  getOneNote(req, res){
    const id = req.params.id;
    // console.log(id)
    let oneNote = noteModel.findById(id);
    res.json(oneNote)
  }

  deletNote(req,res){
    const id = req.params.id;
    // console.log(id + "este es el id a eliminar")
    let notes = noteModel.deleteByID(id)
    // console.log('nuevas notas' + notes)
    res.json(notes)
  }
  updateNote(req, res){
    const id = req.params.id;
    let {title,content,status} = req.body
    let notes = noteModel.updateByID(id, title,content,status);
    // console.log(notes)
    res.json(notes)
}
}