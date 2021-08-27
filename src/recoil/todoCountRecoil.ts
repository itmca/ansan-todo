import { selector } from 'recoil';
import todoListState from './todoRecoil';

export interface ITodoCount{
  totalCount: number,
  totalDoneCount: number,
  totalNotDoneCount: number,
  percentDone: number,
}

export const todoCountState =  selector({
  key:'todoCountState',
  get: ({ get }) => { 
    const todoList = get(todoListState);
    const totalCount = todoList.length;
    const totalDoneCount = todoList.filter((item) => item.done === true).length;
    const totalNotDoneCount = totalCount - totalDoneCount;
    const percentDone = totalCount === 0 ? 0 : totalDoneCount / totalCount;
    
    return {
      totalCount,
      totalDoneCount,
      totalNotDoneCount,
      percentDone,
    };
  },
});


export default todoCountState;