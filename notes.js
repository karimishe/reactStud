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
            notes: [
                {
                    id: 1,
                    text: "Задача №1",
                    color: "green"
                },
                {
                    id: 2,
                    text: "Задача №2",
                    color: "green"
                },
                {
                    id: 3,
                    text: "Задача №3",
                    color: "gray"
                },
                {
                    id: 4,
                    text: "Задача №4",
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
                <NotesGrid/>
            </div>
        );
    },
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);