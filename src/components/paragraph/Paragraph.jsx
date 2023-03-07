import React, { useState } from "react";

const Paragraph = (props) => {
  const [task, setTask] = useState("");
  const handleParagraph = (e) => {
    setTask(e.target.value);
  };
  const handleAdd = () => {
    if (!task) {
      alert("input is empty");
      return;
    }
    const newTask = {
      task: task,
      id: Date.now(),
    };
    props.taskPar(newTask);
    setTask("");
  };

  return (
    <div>
      <h2>Paragaph</h2>
      <input
        value={task}
        type="text"
        placeholder="paragraph"
        onChange={handleParagraph}
      />
      <button onClick={handleAdd}>Save</button>
    </div>
  );
};

export default Paragraph;
