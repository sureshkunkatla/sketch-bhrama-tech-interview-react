import "./App.css";
import Header from "./components/Header/Header";
import DayDateTime from "./components/DayDateTime/DayDateTime";
import { useState } from "react";

function App() {
  const [rows, setRows] = useState([]);
  console.log(rows);

  const onClickAdd = () => {
    setRows((prev) => {
      const newObj = {
        id: rows[rows.length - 1]?.id + 1 || 1,
        day: "",
        date: "",
        time: "",
      };

      return [...prev, newObj];
    });
  };

  const onClickDelete = () => {
    setRows([]);
  };

  return (
    <div className="App">
      <Header onClickAdd={onClickAdd} onClickDelete={onClickDelete} />
      <DayDateTime rows={rows} setRows={setRows} />
    </div>
  );
}

export default App;
