var Note = React.createClass({
    render: function() {
        var style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>  {this.props.children} </div>
        );
    }
});

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        };
    },

    handleTextChange: function(event) {
        this.setState({ text: event.target.value });
    },

    handleNoteAdd: function() {
        var newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    },

    render: function() {
        return (  
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>

            </div>
        );
    }
});

var NotesGrid = React.createClass({

    render: function() {
        return (
            <div className="notes-grid" >
                {
                    this.props.notes.map(function(note){
                        return (
                            <Note
                                key={note.id}
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

var NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: [
                {
                    id: 1,
                    text: "Задача №1",
                    color: "green"
                },
                {
                    id: 2,
                    text: "Задача №2 adsfasdf asd dasf asdf dasfasdasdf dasf asdf ",
                    color: "green"
                },
                {
                    id: 3,
                    text: "Задача №3 dsafasdfasdf dasf asdf asdf asdfasdfasd sadf ",
                    color: "gray"
                },
                {
                    id: 4,
                    text: "Задача №4 sdafasdfasdf asdf asdf asdfasdfasd fasd fasdf asdf asdf asdf",
                    color: "red"
                },
                {
                    id: 5,
                    text: "Задача №5",
                    color: "red"
                },
                {
                    id: 6,
                    text: "Задача №6",
                    color: "yellow"
                },
                {
                    id: 7,
                    text: "Задача №7",
                    color: "cian"
                }

            ]
        };
    },

    componentDidMount: function() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    },

    handleNoteAdd: function(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes },  this._updateLocalStorage);
    },

    render: function() {
        return (
            <div className="notes-app">
                <h2 className="app-header"></h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} />
            </div>
        );
    },

    _updateLocalStorage: function() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }

});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);