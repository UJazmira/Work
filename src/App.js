import React, { useState } from "react";
import Counter from "./components/couter/Counter";
import Paragraph from "./components/paragraph/Paragraph";
import ParagraphList from "./components/paragraph/ParagraphList";
import Users from "./components/users/Users";

const App = () => {
  const [users, setUsers] = useState([
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80, id: 1 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40, id: 2 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60, id: 3 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55, id: 4 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44, id: 5 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22, id: 6 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70, id: 7 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33, id: 8 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16, id: 9 },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28, id: 10 },
    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72, id: 11 },
  ]);
  const [paragraph, setParagraph] = useState([]);
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  const taskPar = (newObj) => {
    let newParagraph = [...paragraph];
    newParagraph.push(newObj);
    setParagraph(newParagraph);
  };
  return (
    <div>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <Counter increment={increment} decrement={decrement} />
      <Paragraph taskPar={taskPar} />
      <ParagraphList paragraph={paragraph} />
      <Users users={users} />
    </div>
  );
};

export default App;
