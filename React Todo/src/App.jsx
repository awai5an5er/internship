import { useState } from "react";
function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (index) => {
    const newArr = taskList.filter((_, i) => index !== i);
    setTaskList([...newArr]);
    const delTasks = [];
    delTasks.push(...delTasks, taskList[index]);
    console.log(`Deleted Task: ${delTasks}`);
  };
  const completeTask = (index) => {
    const newArr = taskList.filter((_, i) => index !== i);
    setTaskList([...newArr]);
    const compTasks = [];
    compTasks.push(...compTasks, taskList[index]);
    console.log(`Completed Task: ${compTasks}`);
  };
  return (
    <div className="main">
      <header className="">
        <h1>ToDo List</h1>
      </header>
      <div className="int">
        <input
          className="inp"
          placeholder="Task Name..."
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
        <button
          className="add btn"
          onClick={() => task && setTaskList([...taskList, task])}
        >
          Add
        </button>
        <button className="del btn" onClick={() => setTaskList([])}>
          Delete All
        </button>
      </div>
      <div>
        {/* {deleteTask &&
          deleteTask.map((val, index) => (
            <div key={`${index} ${val}`}>
              <h2>
                Task {index + 1} : {val}
              </h2>
            </div>
          ))} */}
      </div>
      {taskList &&
        taskList.map((val, index) => (
          <div key={`${index} ${val}`} className="out">
            <h2>
              Task {index + 1}: {val}
            </h2>

            <button className="delBtn" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="done" onClick={() => completeTask(index)}>
              Done
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
