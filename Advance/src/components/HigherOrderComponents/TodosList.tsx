// import { useEffect, useState } from "react";
import withFetch from "./withFetch";

function TodosList({ data: todos, isLoading, error, refetch, isRefetching }: any) {
  // const [todos, setTodos] = useState(data);
  // useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setTodos(data);
  //     })
  // }, []);
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Todos List</h1>
      <button onClick={refetch}>Refetch</button>
      {isRefetching && <div>refetching...</div>}
      <div>
        {todos.map((todo: any) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </div>
    </div>
  );
}

export default withFetch(
  TodosList,
  "https://jsonplaceholder.typicode.com/todos"
);
