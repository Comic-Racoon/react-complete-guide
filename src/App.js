import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi I am a React App</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <Person />
      </div>
    );
  }
}
export default App;
