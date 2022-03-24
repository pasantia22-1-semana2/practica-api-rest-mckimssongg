import {Note, NoteModels} from '../models/note.models.js';


const noteModel = new NoteModels();

export class NoteController{
  constructor(){}


  //metodo para responder la ruta "obtener todas las notas"
  getAllNotes(req, res){
    let allNotes = noteModel.all();
    res.json(allNotes)
  }

  //crear una nueva nota
  async createNewNote(req,res){
    let {title,content,status} = req.body
    const newNote = new Note(title,content,status);
    let result = await noteModel.save(newNote);
    if ( result >0 ){
      return res.json({message:"Se creo una nueva nota"})
    }
    return res.json({message:"Error"})
  }

  getOneNote(req, res){
    const id = req.params.id;
    console.log(id)
    let oneNote = noteModel.findById(id);
    res.json(oneNote)
  }

}