var React = require('react');
var Note = require('./Note.jsx');

require('./NotesGrid.css');

var NotesGrid = React.createClass({

    render: function() {
        var onNoteDelete = this.props.onNoteDelete;

        return (
            <div className="notes-grid" >
                {
                    this.props.notes.map(function(note){
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
});

module.exports = NotesGrid;