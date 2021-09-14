import React, { Suspense } from 'react';
import './TodoListPage.css';
import TodoListBody from '../components/TodoListBody';
import TodoListHead from '../components/TodoListHead';
import TodoCreate from '../components/TodoCreate';


function TodoListPage(): JSX.Element {
  return (
    <div className='TodoListBody'>
      <TodoListHead />
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <TodoListBody />
      </Suspense>
      <TodoCreate />
    </div>
  );
}

export default TodoListPage;