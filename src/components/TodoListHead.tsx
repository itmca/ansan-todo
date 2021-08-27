


import React from 'react';
import './TodoListHead.css';

function TodoListHead() {
  return (
    <div className='head'>
         <h1>2019년 7월 10일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </div>
  );
}

export default TodoListHead;