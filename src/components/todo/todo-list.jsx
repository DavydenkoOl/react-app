import React, { useState } from 'react';

const TodoList = () => {

  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const [isImage1, setIsImage1] = useState(true); // Состояние для отслеживания текущего изображения

  // Функция для изменения изображения
  const changeImage = () => {
    setIsImage1(!isImage1); // Меняем состояние на противоположное
  };
    return (
        <div style={{width: '800px', height: '600px', justifyContent: 'center',alignItems:'center',background:'#41bdc7'}}>
            <h1 style={{textAlign:'center',marginBottom:'15px'}}>Todo List</h1>
          <div style={{display:'flex',marginBottom:'24px'}}>
             <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Введите задачу"  className="form-control" />
             <button className="btn btn-primary" onClick={handleAddTask}>Добавить </button>
          </div>
      <div style={{width: '100%'} }>
        <div style={{display:'flex',background:'white',justifyContent:'flex-end',marginBottom:'2px'}}>
        <button id='btn_all' className="btn btn-primary">ToDo</button>
        <button id='btn_all' className="btn btn-primary">Done</button>
        <button id='btn_all' className="btn btn-primary">All</button>
        </div>
        {tasks.map((task, index) => (
          <div key={index} style={{ marginBottom: '10px',width: '800px', justifyContent: 'space-between',display:'flex',background:'white' }}>
            <button id='btn_tick' onClick={changeImage} className={isImage1 ? 'image-button image-button-1' : 'image-button image-button-2'} ></button>
            <div style={{  width:'75%',background:'white',borderRadius:'5px' }}><span >{task}</span></div>
            <button id='btn_del'   onClick={() => handleDeleteTask(index)}></button>
            
          </div>
        ))}
      </div>
      
    </div>

     
  
    );
}

export default TodoList;
