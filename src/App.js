import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Getting started with React testing library</h2>
      </header>

      <div className="App-body">
        <BrowserRouter>
          <Routes>  
              <Route path="/item/:id" component={TodoItem} />
              <Route exact path="/" component={TodoList} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;