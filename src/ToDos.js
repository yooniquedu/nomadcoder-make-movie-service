import { useState } from "react";

function ToDos() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  console.log(toDos);

  return (
    <div>
      <h1>ToDo 입력창</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (toDo === "") return;

          setToDos((prev) => [toDo, ...prev]);
          setToDo("");
        }}
      >
        <input
          type="text"
          placeholder="Write your to do..."
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
        />
        <button>Add To Do</button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>ToDos List({toDos.length})</h1>
        <ul>
          {toDos.map((item, i) => (
            <li key={i}>
              {item}
              <button
                onClick={() =>
                  setToDos((prev) => prev.filter((toDo, index) => index !== i))
                }
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDos;
