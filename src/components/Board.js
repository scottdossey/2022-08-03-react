import React from 'react';
import Note from './Note';
import '../css/Board.css';

function Board() {
    
    let [notes, setNotes] = React.useState([]);

    function addNote() {
        let new_notes = [...notes]; //Create a copy of our notes array
        new_notes.push(  //Add a new note to the end of the array using push
            {
                id: Date.now()  //the new note only contains a id
                                //and we are using Date.now() as a "quick and dirty"
                                //way to create a unique id for the note.

                                
            }
        );
        setNotes(new_notes);  //all the notes are rewritten to state using
                              //the setNotes function provide React.useState
                              //to change the notes state.
    }

    function deleteNote(id) {
        let newNotes = [];
        for( let note of notes ) {
            if( id !== note.id) {  
                newNotes.push(note); //add every note whose id does not
                                     //match the dropped one
            }
        }
        setNotes(newNotes); //write the newNotes array without the dropped note.
    }

    //We want turn our array of note objects into an array of HTML objects.

    
    return (
        <div>
            <div className="div-board">
                <div className="row"> 
                    {notes.map( note => <Note key={note.id} id={note.id} deleteHandler={deleteNote} />)}                    
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button" onClick={addNote}>Add</button>
            </div>
        </div>
    );
}

export default Board;