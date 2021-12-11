// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { TodoList } from "./TodoList";
import { TodoItem } from './TodoItem'

function App() {
  this.setState({});
  return (
    <div className="App">
      <header className="App-header">
        <h2>Getting started with React testing library</h2>
      </header>
      <div className="App-body">
        <BrowserRouter>
          <Route path="/item/:id" component={TodoItem} />
          <Route exact path="/" component={TodoList} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
