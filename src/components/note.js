import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

class Note extends React.Component {
    render() {
        return (
            <div className="Note">
                <h2 className="Note_title">
            <Link to={`/note/${this.props.id}`}> {this.props.name} </Link>
            </h2>
            <p className="date-modified"> Modified on {new Date(this.props.modified).toLocaleDateString()}</p>
                    <button className="delete-note"> Delete Note </button>
            </div>   
         
    );
  }
}

export default Note;


