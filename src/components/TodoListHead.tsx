// import React from 'react';
import { useRecoilValue } from 'recoil';
import todoCountState from '../recoil/todoCountRecoil';
import './TodoListHead.css';

function TodoListHead() {
  const {
    totalCount,
    // totalDoneCount,
    totalNotDoneCount,
    percentDone,
  } = useRecoilValue(todoCountState);



  const formatPercentageDone = Math.round(percentDone * 100);
  const formatPercentageNotDone = 100 - formatPercentageDone;
  
  return (
    <div className="head">
         <h1>2019년 7월 10일</h1>
      <div className="day">수요일</div>
      {totalNotDoneCount === 0 ?
        <div className="tasks-left">모두 완료 !</div> : 
        <div className="tasks-left">할 일 {totalNotDoneCount}개 남음</div>
        }
      <div className="sub-count-info">
        <span>총 {totalCount} 개의 리스트 / </span>
        <span>{formatPercentageDone} % 완료 / </span>
        <span>{formatPercentageNotDone} % 미완료</span>
      </div>
    </div>
  );
}

export default TodoListHead;