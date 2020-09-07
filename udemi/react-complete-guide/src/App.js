import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "Adrian", age: "12" },
      { name: "Zoe", age: "142" },
      { name: "Luke", age: "25" }
    ]
  }



  handleOnClick = (newName) => {
    // console.log("clicked")
    this.setState({
      people: [
        { name: "Adriano", age: "12" },
        { name: "Zoe", age: "142" },
        { name: newName, age: "100500" }
      ]
    })
  }

  handleChangeName = (event) => {
    this.setState({
      people: [
        { name: "Adriano", age: "12" },
        { name: "Zoe", age: "142" },
        { name: event.target.value, age: "100500" }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hello there</h1>
        {/* <button onClick={this.handleOnClick}>Click me</button> */}
        <button
          style={style}
          onClick={this.handleOnClick.bind(this, "not a Zver")}>Click me
        </button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age} />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age} />
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
          click={this.handleOnClick.bind(this, "Zver")}
          changed={this.handleChangeName}>
          My hobbies: play tennis</Person>
      </div >

    );
  }
}

export default App;
