import React from 'react';
import Note from './Note';
import '../css/Board.css';

function Board() {
    
    let [notes, setNotes] = React.useState([
    ]);

    function addNote() {
        let new_notes = [...notes];
        new_notes.push(
            {
                id: Date.now()
            }
        );
        setNotes(new_notes);
    }

    function deleteNote(id) {
        let newNotes = [];
        for( let note of notes ) {
            if( id !== note.id) {
                newNotes.push(note);
            }
        }
        setNotes(newNotes);
    }
    
    return (
        <div>
            <div className="div-board">
                <div className="row"> 
                    {notes.map( note => <Note key={note.id} id={note.id} deleteHandler={deleteNote} /> )}
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button" onClick={addNote}>Add</button>
            </div>
        </div>
    );
}

export default Board;