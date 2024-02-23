import React from 'react';
import './todo-list2.css'
import TodoAdd from './todo-add';
import TodoFilter from './todo-filter';
import TodoTask from './todo-task';

const list = [
    {
        id: 1, title: 'Work', done: true
    },
    {
        id: 2, title: 'Shop', done: false
    },
    {
        id: 3, title: 'Gym', done: true
    }
];

const TodoList2 = () => {



    return (
        <div className='container'>

            <h2 style={{ color: 'dodgerblue' }}>ToDo List </h2>

            <div className='todolist'>
                <TodoAdd />
                <TodoFilter />
                <div>
                    {list.map((task) => (<TodoTask {...task} key={task.id} />))}


                </div>
            </div>
        </div>
    );

}
export default TodoList2;