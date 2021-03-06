
import { useState } from 'react';
import './index.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput)=>{
if(userInput) {
  const newItem = {
    id: Math.random().toString(36).substring(2.9),
    task: userInput,
    complete : false
  }
  setTodos ([...todos, newItem ])
}
}

  const removeTask = (id) => {
  setTodos ([...todos.filter ((todo) =>todo.id !== id)])
  }

  const handleToggle = (id) => {
  setTodos ([
    ...todos.map((todo)=>
    todo.id === id ? {...todo, complete: !todo.complete} : {todo}
    )
  ])
  }
  return (
  <>
  <header>
    <h1>Список задач: {todos.length}</h1>

  </header>
<TodoForm addTask={addTask} />
{todos.map((todo) => {
  return (
    <Todo
    todo={todo}
    key={todo.id}
    toggleTask={handleToggle}
    removeTask={removeTask}
    />
  )
})}
  </>
  );
}

export default App;
