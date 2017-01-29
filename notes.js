var Note = React.createClass({
    render: function() {
        return (
            <div className="note"> Note </div>
        );
    }
});

var NoteEditor = React.createClass({
    render: function() {
        return (  
            <div className="note-editor">NoteEditor</div>
        );
    }
});

var NotesGrid = React.createClass({
    render: function() {
        return (
            <div className="notes-grid">
                NotesGrid
                <Note />
                <Note />
                <Note />
            </div>
        );
    }
});

var NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: []
        };
    },
    render: function() {
        return (
            <div>
                NotesApp
                <NoteEditor/>
                <NotesGrid/>
            </div>
        );
    },
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);