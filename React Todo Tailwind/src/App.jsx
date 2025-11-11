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
    <div className="flex flex-col min-h-screen bg-amber-50">
      <header className="bg-cyan-800 py-5 border-b-2 border-black shadow-lg sticky top-0 z-50">
        <h1 className="flex justify-center font-extrabold text-4xl text-amber-50">
          ToDo List
        </h1>
      </header>
      <div className="flex flex-col gap-2 items-end w-full pr-8 mt-4">
        <input
          className="border-2 border-cyan-700 rounded-2xl px-4 py-2 shadow-md w-64"
          placeholder="Task Name..."
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
        <button
          className="bg-cyan-800 text-amber-50 rounded-3xl font-bold w-64 py-2 shadow-md transition-all cursor-pointer hover:bg-emerald-700"
          onClick={() => task && setTaskList([...taskList, task])}
        >
          Add
        </button>
        <button
          className="bg-cyan-800 text-amber-50 rounded-3xl font-bold w-64 py-2 shadow-md hover:bg-red-700 transition-all cursor-pointer"
          onClick={() => setTaskList([])}
        >
          Delete All
        </button>
      </div>
      <div className="flex flex-col items-start mt-8 space-y-6 px-20">
        {taskList &&
          taskList.map((val, index) => (
            <div
              key={`${index} ${val}`}
              className="rounded-2xl shadow-lg border-2 border-cyan-800 bg-white w-full max-w-md p-6 flex flex-col items-center"
            >
              <h2 className="font-bold text-lg text-cyan-800 text-center mb-4">
                Task {index + 1}: {val}
              </h2>

              <div className="flex gap-3">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-2xl shadow-md transition-all cursor-pointer"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1 px-4 rounded-2xl shadow-md transition-all cursor-pointer"
                  onClick={() => completeTask(index)}
                >
                  Done
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
