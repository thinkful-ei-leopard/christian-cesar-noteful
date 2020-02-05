import React from 'react'
import Note from './Note'

export default class Notelist extends React.Component{
    render() {
        console.log(this.props.notes)
        return (
        <div className="NoteList">
                <ul className="NoteList_list">
                    {this.props.notes.map(note =>
                    <Note
                        id={note.id}
                        name={note.name}
                        modified={note.modified}
                        folderId={note.folderId}
                        content={note.content} />
                        )}
                </ul>  
                <button className="add-note"> Add Note </button>
        </div>
        );
    }
}



