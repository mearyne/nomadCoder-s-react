import {useState} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setToDo(event.target.value);
        console.log(toDo);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (toDo === "") {
            return;
        }

        setToDo("");
        setToDos((currentArray) => {
            return [toDo, ...currentArray]
        });

    };

    console.log(toDos);

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input type={"text"} value={toDo} placeholder={"Write your to do..."} onChange={onChange}/>
                <button>Add ToDo</button>
            </form>
            <ul>
                {toDos.map((toDo) => {
                    return (
                        <li>{toDo}</li>
                    );
                })}
            </ul>

        </div>
    );
}

export default App;
