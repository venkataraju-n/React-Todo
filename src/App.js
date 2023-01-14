
import './App.css';
import {useState} from "react"
import {v4 as uuidv4} from "uuid"

function App() {

  const [input, setInput]=useState("")
  const [todo,setTodo]=useState([])

  const onInputChange=(event)=>{
    setInput(event.target.value)
  }
  const onFormSubmit=(event)=>{
    event.preventDefault()
    setTodo([...todo,{id:uuidv4(),title:input,completed:false}])
    setInput("")
  }

  return (
    <div className="App">
      <h1>React Todo List</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text"  value={input} required onChange={onInputChange}/>
        <button type='submit'>add task</button>
      </form>
      <div className='list'>
      {todo.map((t)=>{
         <li key={t.key}>
          <input type="text"
          value={t.title}
          onChange={(event)=> event.preventDefault()}/>
          <div>
            <button>M</button>
            <button>E</button>
            <button>X</button>
          </div>
         </li>
      })}
      </div>
    </div>
  );
}

export default App;
