import Task from "./component/Task";

const App = () => {
  return (
    <>
      <h1>タスク一覧</h1>
      <Task name="買い物" />
      <Task name="料理" />
      <Task name="片付け" />
      <Task name="洗濯" />
    </>
  );
}

export default App;
