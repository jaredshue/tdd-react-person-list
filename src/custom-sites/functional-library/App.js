import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        fetch("http://www.json-generator.com/api/json/get/cgwULHiWDC?indent=4")
            .then(response => response.json())
            .then(data => setBooks(data));
    });

    return (
        <div className="app">
            <div id="book-list-container">
                <h1>Library Inventory:</h1>
                <ul className="book-list">
                    {
                        books.map(book => {
                            return (
                                <li className="book" key={ book._id }>
                                    <img src={ book.picture } alt={ book.title } />
                                    <div>
                                        <h2>{ book.title }</h2>
                                        <p>{ book.pages } pages</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;
