var Note = React.createClass({
    render: function() {
        var style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>  {this.props.children} </div>
        );
    }
});

var NoteEditor = React.createClass({
    render: function() {
        return (  
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                />
                <button className="add-button">Add</button>

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
    render: function() {
        return (
            <div>
                NotesApp
                <NoteEditor/>
                <NotesGrid notes={this.state.notes}/>
            </div>
        );
    },
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);