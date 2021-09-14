/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';
import { TodoListService } from '../services/TodoListService';

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
  ],
});

export const updateTodoState = atom<number>({
  key: 'updateTodoState',
  default: 0,
});

export const getTodoListState = selector<ITodoItem[]>(
  {
    key: 'getTodoListState',
    get: async ({ get }) => {
      get(updateTodoState);
      try {
        const result = await TodoListService.getTodoListService();
        return result || [];

      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },
);

export default todoListState;