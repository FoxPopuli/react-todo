import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem title="A Dummy item" date={new Date("20 January 2020")} />
    </div>
  );
}

export default App;
