import './App.css';
import React, { Component } from 'react'

class App extends Component {

  state = {
    toDoList: []
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>To Do List</h1>
        </div>
        <form className="newEl" onSubmit={this.handleSubmit}>
          <div className='inputT'>
            <input type="text" name='toDoTask' className='form-control' placeholder='enter task' autoComplete='off' />
            <button type='submit' className='addButton'>Add</button>
          </div>
        </form>

        <ul className='list'>
          {
            this.state.toDoList.map(
              (item, index) => {
                return <li key={index}>
                  {item}
                  <button className='del-button' onClick={(event) => { this.deleteTask(event, index) }}>Del</button>
                </li>
              }
            )
          }
        </ul>
      </div>
    );

  }
  handleSubmit = (event) => {
    var taskText = event.target.elements.toDoTask.value;
    if (taskText.length > 0) {
      this.setState({
        toDoList: [...this.state.toDoList, taskText]
      })
      event.target.reset();
    }
    event.preventDefault();
  }

  deleteTask = (event, index) => {
    var taskArr = [...this.state.toDoList];
    taskArr.splice(index, 1);
    this.setState({ toDoList: taskArr });
  }

}

export default App;
