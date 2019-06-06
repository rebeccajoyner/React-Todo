import React from 'react'

function TodoForm(props) {
    return (
        <form className="form" onSubmit={e => props.addTask(e)}>

            <input
                type="text"
                name="taskInput"
                placeholder="Task Input"
                value={props.taskInput}
                onChange={e => props.changeHandler(e)}
            />

            <button>Submit</button>
            
            <button>Clear Completed</button>

        </form>
    );
}

export default TodoForm;
