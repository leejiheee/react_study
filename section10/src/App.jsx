import './App.css';
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "집에가기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "집에 얼른 가기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": return [action.data, ...state];
    case "UPDATE": return state.map((item) =>
      item.id === action.targetId
        ? { ...item, isDone: !item.isDone }
        : item);
    case "DELETE": return state.filter((item) => item.id !== action.targetId)
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        data: new Date().getTime(),
      }
    })

  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변셩

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 데이터만 딱 바꾼 새로운 배열
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  };


  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, [])

  const memoizedDispatch = useMemo(()=>{return {onCreate, onUpdate, onDelete}}, []);

  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
        value={memoizedDispatch}>
          <Editor />
          <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App;
