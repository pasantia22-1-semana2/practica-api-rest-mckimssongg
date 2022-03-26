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
    let {title,content,status} = req.body;
    if(title !== undefined && content !== undefined && status !== undefined){
      try {
        const newNote = new Note(title,content,status);
        let result =  await noteModel.save(newNote);
        if(result === 0){
          let message="No se creo la nota";
          response.error(req,res,message,500)
        }else{
          let messageOk = "Se ha creado una nueva nota"; 
          response.succes(req,res,messageOk,200)
        }
        
      } catch (error) {
        console.log(error)
        response.error(req,res,null,500); 
      }
    }else{
      let messageError="complete todos los datos";
      response.error(req,res,messageError,500)
    }
  }

  getOneNote(req, res){
    const id = req.params.id;
    // console.log(id)
    let oneNote = noteModel.findById(id);
    if (oneNote){
      response.succes(req,res,oneNote,200)
    }else{
      let messageNotFound="la nota no existe";
      response.error(req,res,messageNotFound,404)
    }
  }

  deletNote(req,res){
    const id = req.params.id;
    // console.log(id + "este es el id a eliminar")
    let notes = noteModel.deleteByID(id)
    // console.log('nuevas notas' + notes)
    response.succes(req,res,notes,200)
  }
  updateNote(req, res){
    const id = req.params.id;
    let {title,content,status} = req.body
    let notes = noteModel.updateByID(id, title,content,status);
    // console.log(notes)
    response.succes(req,res,notes,200)
}
}