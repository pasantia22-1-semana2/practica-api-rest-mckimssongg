
import fs from 'fs'; //modulo de nodejs, >investigar

export class Note{
    constructor(title, content, status){
        this._id = 0;
        this._title = title;
        this._content = content;
        this._status = status;
    }
    get title(){
        return this._title
    }
    get id(){
        return this._id
    }
    get content(){
        this._content
    }
    get status(){
        this._status
    }
    set id(id){
        this._id=id
    }
    set title(title){
        this._title=title
    }
    set content(content){
        this._content=content
    }
    set status(status){
        this._status=status
    }
}


export class NoteModels{
    constructor(){
        this._name = 'db'
        this._dataDIr = 'db'
        this._datPath = 'db/db.json';
    }
    readJsonFile(){
        let contentFile = fs.readFileSync(this._datPath, 'utf-8');
        if(contentFile){
            return JSON.parse(contentFile)
        }
        return [];                                      
    }
    writeJsonFile(data){
        let jsonData = JSON.stringify(data,null,'');
        // console.log(jsonData)
        fs.writeFileSync(this._datPath,jsonData);

    }
    generatePk(){
        let items = this.readJsonFile();
        let lastItem = items.pop();

        if(lastItem){
            return ++lastItem._id;
        }
        return 1;
    }

    async save(note){
        try{
            let notes = this.readJsonFile();
            note._id = this.generatePk()
            notes.push(note);
            await this.writeJsonFile(notes);
            return note._id;
        }
        catch(e){
            console.log(e)
            return 0;
        }
    }

    all(){
        return this.readJsonFile();
    }
    
    findById(id){
        let items = this.readJsonFile()
        return items.find((item)=> item._id == id)
    }
    deleteByID(id){
        // let note = this.findById(id);
        let allNotes = this.readJsonFile()
        // console.log(allNotes)
        let index = allNotes.findIndex((x)=>x._id==id)
        allNotes.splice(index, 1)
        // console.log(allNotes)
        this.writeJsonFile(allNotes)
        return this.all() 
    }
    updateByID(id, title, content, status){
        let notes = this.readJsonFile();
        let nota = this.findById(id)
        nota._title = title
        nota._content = content
        nota._status = status
        let index = notes.findIndex((x)=>x._id==id)
        notes[index]=nota
        this.writeJsonFile(notes)
        return this.all() 
    }
}
