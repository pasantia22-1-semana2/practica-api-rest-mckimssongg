import express from 'express';
import { NoteController } from '../controllers/note.ctl.js';


const noteController = new NoteController();
const routerNote = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Notes:
 *          type: object
 *          properties:
 *              title: 
 *                type: string
 *                description: title of note
 *              content: 
 *                type: string
 *                description: content of note
 *              status: 
 *                 type: boolen
 *                 description: status of note
 *          required:
 *              - title
 *              - content
 *              - status
 *          example:
 *              title: first note
 *              content: my first note
 *              status: false
 */

routerNote.get('/', noteController.getAllNotes)

/**
 * @swagger
 * /api/v1/note:
 *  get:
 *    summary: return all notes
 *    tags: [note]   
 *    responses:
 *      200:
 *        description: all notes!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *                    
 */

routerNote.get('/:id', noteController.getOneNote)

/**
 * @swagger
 * /api/v1/note/{id}:
 *  get:
 *    summary: return one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id   
 *    responses:
 *      200:
 *        description: all notes!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: note not found                 
 */


routerNote.post('/', noteController.createNewNote)

/**
 * @swagger
 * /api/v1/note:
 *  post:
 *    summary: create a new note
 *    tags: [note]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notes'
 *    responses:
 *      200:
 *        description: new note created!
 *      500: 
 *        description: Inter Server Error
 *                    
 */

routerNote.put('/:id', noteController.updateNote)

/**
 * @swagger
 * /api/v1/note/{id}:
 *  put:
 *    summary: update one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notes'   
 *    responses:
 *      200:
 *        description: note updated!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: user not found                 
 */

routerNote.delete('/:id', noteController.deletNote)

/**
 * @swagger
 * /api/v1/note/{id}:
 *  delete:
 *    summary: return one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id   
 *    responses:
 *      200:
 *        description: note is deleted!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: note not found and not deleted                
 */


export default routerNote;