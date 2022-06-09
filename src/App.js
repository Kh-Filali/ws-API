import './App.css';
import {  Routes, Route } from "react-router-dom";
import TodoDetails from "./components/TodoDetails";
import ListTodos from "./components/ListTodos";

function App() {




  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListTodos />} />

        <Route path='/todo/:id' element={<TodoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
