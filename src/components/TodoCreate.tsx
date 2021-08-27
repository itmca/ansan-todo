

import React, { ChangeEvent, useState } from 'react';
import './TodoCreate.css';
import { MdAdd } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import todoListState, { inputState, ITodoItem } from '../recoil/todoRecoil';

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [todoList, setTodoList] = useRecoilState<ITodoItem[]>(todoListState);
  const [text, setText] = useRecoilState<string>(inputState);

  
  const onToggle = () => setOpen(!open);

  const onChange =  (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const nextId: number = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: nextId,
        text: text,
        done: false,
      },
    ]);
    setText('');
  };

  return (
    <>
      {open && (
        <div className='insertFormPositioner'>
          <form className='insertForm' onSubmit={onSubmit}>
            <input type='text' value={text} autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요"  onChange={onChange}/>
          </form>
        </div>
      )}
      <button className={`circleButton ${open && 'openButton'}`} onClick={onToggle} >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoCreate;