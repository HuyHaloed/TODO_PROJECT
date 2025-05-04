
import './App.css';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import { getTodos } from './api/endpoints';
function App() {

  const [todos, setTodo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodos()
      setTodo(response);
      console.log(response)
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <div className='app-container'>
        <h1 className='title'>Todo App</h1>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
