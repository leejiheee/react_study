import { useState, useMemo, useContext } from 'react';
import './List.css';
import TodoItem from './TodoItem';
import { TodoStateContext } from '../App';

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  }

  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } =
    useMemo(() => {
      console.log("getAnalyzedData 호출!");
      const totalCount = todos.length;
      const doneCount = todos.filter((todo) => todo.isDone).length;
      const notDoneCount = totalCount - doneCount;

      return {
        totalCount,
        doneCount,
        notDoneCount
      }
    }, [todos]);
  // 의존성배열: deps
  // 서치할때는 불필요한 리렌더링이 진행되고 있어서 이 부분만 방지

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;