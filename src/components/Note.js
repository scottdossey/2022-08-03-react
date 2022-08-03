import React from 'react';
import PropTypes from 'prop-types';
import '../css/Note.css';


const GENERIC_NOTE_TITLE = "New Note Title";
const GENERIC_NOTE_BODY = "New Note Body";

function Note(props) {
    
    //We are going to create state variables in 
    //a special way because we want React to
    //track when those variables change..so it knows when to
    //update the webpage.

    //Right now notes is getting its "content" from
    //properties..........
    let [title, setTitle] = React.useState(GENERIC_NOTE_TITLE);
    let [body, setBody] = React.useState(GENERIC_NOTE_BODY);
    let [editMode, setEditMode] = React.useState(false);

    let titleContent = React.createRef();
    let bodyContent = React.createRef();

    function handleEdit() {
        setEditMode(true);
    }

    function handleSave() {
        setTitle(titleContent.current.value);
        setBody(bodyContent.current.value);        
        setEditMode(false);
    }

    function handleDelete() {
        props.deleteHandler(props.id);
    }

    let titleElement, bodyElement, buttonArea;
    if (editMode) {
        titleElement = <textarea ref={titleContent} className="title-textarea" defaultValue={title}></textarea>;
        bodyElement = <textarea ref={bodyContent} className="body-textarea" defaultValue={body}></textarea>;
        buttonArea = <div><button className="btn btn-primary" onClick={handleSave}>Save</button></div>;
    } else {
        titleElement = <h5 className="card-title">{title}</h5>;
        bodyElement = <p>{body}</p>;
        buttonArea = (
            <div>
                <button className="btn btn-info" onClick={handleEdit}>Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        );
    }

    return (
        <div className="col-sm-6">
            <div className="card card-view">
                <div className="card-body">
                    {titleElement}
                    {bodyElement}
                    {buttonArea}
                </div>
            </div>
        </div>
    );
}

export default Note;