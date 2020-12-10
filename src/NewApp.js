import "./App.css";
import React from "react";

function NewApp() {
    const [ count, setCount ] = useState(0);

    const incrementCount = () => React.setCount(count + 1);
    const decrementCount = () => React.setCount(count - 1);

    React.useEffect(() => {
        document.title = `${count} Counter`;
    });

    return (
        <div className="App">
        <div>{ count }</div>
            <button onClick={ incrementCount }>+1</button>
            <button onClick={ decrementCount }>-1</button>
        </div>
    );
}

export default NewApp;
