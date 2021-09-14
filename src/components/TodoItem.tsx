import React from 'react';
import './TodoItem.css';
import { MdDone, MdDelete } from 'react-icons/md';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getTodoListState, ITodoItem, updateTodoState } from '../recoil/todoRecoil';
import { TodoListService } from '../services/TodoListService';



function TodoItem({ id, text, done }: ITodoItem) {

  const todoListTemp = useRecoilValue<ITodoItem[]>(getTodoListState);
  const [count, updateTodoList] = useRecoilState(updateTodoState);


  const doneToggle = async (doneId: number) => {
    // TodoListService.toggleTodo(doneId);
    const findTodo = todoListTemp.filter(e => e.id === doneId).pop();
    console.log(findTodo);
    if (findTodo === undefined) return;
    const updateTodo = { ...findTodo, done: !findTodo.done };
    await TodoListService.toggleTodo(doneId, updateTodo);
    const updateCount = count + 1;
    updateTodoList(updateCount);
  };

  const deleteTodo = async (doneId: number) => {

    await TodoListService.deleteTodo(doneId);
    const updateCount = count + 1;
    updateTodoList(updateCount);
  };

  return (<div className='itemBody'>
    <div className={`itemDone ${done && 'complete'}`} onClick={() => doneToggle(id)}> <MdDone /></div>
    <div className='itemText'>{text}</div>
    <div className='itemRemove' onClick={() => deleteTodo(id)}>
      <MdDelete />
    </div>
  </div>);
}

TodoItem.defaultProps = {
  done: false,
};


export default TodoItem;