import { TiDelete } from "react-icons/ti";
const Todo = ({todo_name}) => {
    return (
        <div className="todo">
            <div className='todo-container'>
                <input type='checkbox'/>   
                <h3>{todo_name}</h3>
                <TiDelete size='20px'/>                 
            </div>
        </div>
    );
};

export default Todo;