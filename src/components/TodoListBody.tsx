

import React from 'react';
import TodoItem from './TodoItem';

function TodoListBody() : JSX.Element{
  return (
    <div className='listBody'>
      <TodoItem text={'test'}/>
    </div>
  );
}

export default TodoListBody;