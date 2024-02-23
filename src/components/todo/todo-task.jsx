import React from 'react';



const TodoTask = ({title,done}) => {
    return (
        
          <div className="task-item">
            <input type="checkbox" defaultChecked = {done} />
            <span>{title}</span>
            <button>delete</button>
          </div>
          
         
    );
}

export default TodoTask;
