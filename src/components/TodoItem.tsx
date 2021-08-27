import React from 'react';
import './TodoItem.css';
import { MdDone, MdDelete } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { ITodoItem, todoListState } from '../recoil/todoRecoil';



function TodoItem({ id, text, done }:ITodoItem) {

  const [todoList, setTodoList] = useRecoilState<ITodoItem[]>(todoListState);

  const doneToggle = () => {
    setTodoList(todoList.map((todo: ITodoItem)=> {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    }));
  };

  const deleteTodo = () => {
    setTodoList(todoList.filter((todo: ITodoItem)=> todo.id !== id));
  };

  return ( <div className='itemBody'>
  <div className={`itemDone ${done && 'complete'}`} onClick={doneToggle}> <MdDone/></div>
  <div className='itemText'>{text}</div>
  <div className='itemRemove' onClick={deleteTodo}>
    <MdDelete/>
  </div>
  </div>);
}

TodoItem.defaultProps = {
  done: false,
};


export default TodoItem;