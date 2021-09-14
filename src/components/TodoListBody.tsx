/* eslint-disable @typescript-eslint/no-unused-vars */


import React from 'react';
import { useRecoilValue } from 'recoil';
import todoListState, { getTodoListState, ITodoItem } from '../recoil/todoRecoil';
import TodoItem from './TodoItem';
import './TodoListBody.css';
import { useRecoilState } from 'recoil';

function TodoListBody(): JSX.Element {

  const todoList = useRecoilValue<ITodoItem[]>(getTodoListState);

  return (
    <div>
      <div className='listBody'>
        {todoList.map((todo) => <TodoItem id={todo.id} text={todo.text} key={todo.id} done={todo.done} />)}
      </div>
    </div>
  );
}

export default TodoListBody;