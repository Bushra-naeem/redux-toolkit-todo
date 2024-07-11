import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="px-4 md:px-20 lg:px-80">
      <h1 className="font-bold text-4xl mt-12">Todo App</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
