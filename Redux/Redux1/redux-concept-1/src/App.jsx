import "./App.css";
import Counter from "./components/normalcomponents/Counter";
import Todo from "./components/normalcomponents/todo";

function App() {
  return (
    <>
      <div className="main-container">
        <Counter />
        <Todo />
      </div>
    </>
  );
}

export default App;
