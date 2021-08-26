import React from 'react';
import './TodoItem.css';
import { MdDone, MdDelete } from 'react-icons/md';


type TodoItemProps = {
  text: string;
  done?: boolean;
};

function TodoItem({ text, done }:TodoItemProps) {
  return ( <div className='itemBody'>
  <div className={`itemDone ${done && 'complete'}`}> <MdDone/></div>
  <div className='itemText'>{text}</div>
  <div className='itemRemove'>
    <MdDelete/>
  </div>
  </div>);
}

TodoItem.defaultProps = {
  done: false,
};


export default TodoItem;