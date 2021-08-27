import { atom } from 'recoil';

export interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
}

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
});

export const todoListState = atom<ITodoItem[]>({
  key: 'todoListState',
  default: [
    {
      id: 1,
      text: 'Todo List',
      done: false,
    },

  ],
});

export default todoListState;