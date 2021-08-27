

import React from 'react';
import { useRecoilValue } from 'recoil';
import todoListState, { ITodoItem } from '../recoil/todoRecoil';
import TodoItem from './TodoItem';
import './TodoListBody.css';

function TodoListBody() : JSX.Element{

  const todoList = useRecoilValue<ITodoItem[]>(todoListState);
  
  return (
    <div className='listBody'>
      {todoList.map((todo)=> <TodoItem text={todo.text} key={todo.id} done={todo.done}/>)}
    </div>
  );
}

export default TodoListBody;  