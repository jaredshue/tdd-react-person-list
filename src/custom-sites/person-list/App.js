import React from "react";
import PersonList from "./components/PersonList";

class App extends React.Component {
    state = {
        people: [
            {
                name: "Marilyn Monroe",
                born: "1926",
                died: "1962",
                about: [ "American actress", "singer", "model" ]
            },
            {
                name: "Abraham Lincoln",
                born: "1809",
                died: "1865",
                about: [ "US President during American civil war" ]
            },
            {
                name: "Nelson Mandela",
                born: "1918",
                died: "2013",
                about: [ "South African President", "anti-apartheid campaigner" ]
            },
            {
                name: "John F. Kennedy",
                born: "1917",
                died: "1963",
                about: [ "US President 1961 – 1963" ]
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <PersonList people={ this.state.people } />
            </div>
        );
    }
}

export default App;
