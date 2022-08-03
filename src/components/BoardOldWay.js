import React from 'react';
import NoteOldWay from './NoteOldWay';
import '../css/Board.css';


class BoardOldWay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    addNote() {
        let newNotes = [...this.state.notes];
        newNotes.push(
            {
                id: Date.now()
            }
        );
        this.setState(
            {
                notes: newNotes
            }
        );
    }

    deleteNote(id) {
        let newNotes = [];
        for( let note of this.state.notes ) {
            if( id !== note.id) {
                newNotes.push(note);
            }
        }
        this.setState(
            {
                notes: newNotes
            }
        );                
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row"> 
                        {this.state.notes.map( note => <NoteOldWay key={note.id} id={note.id} 
                            deleteHandler={this.deleteNote.bind(this)} /> )}
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
                </div>
            </div>
        );        
    }

}

export default BoardOldWay;