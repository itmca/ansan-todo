import React from 'react';
import './TodoListPage.css';
import TodoListBody from '../components/TodoListBody';
import TodoListHead from '../components/TodoListHead';
import TodoCreate from '../components/TodoCreate';


function TodoListPage(): JSX.Element {
  return (
    <div className='TodoListBody'>
      <TodoListHead/>
      <TodoListBody/>
      <TodoCreate/>
    </div>
  );
}

export default TodoListPage;