import './ToDoList.css';
import React, { Component } from 'react'

class ToDoList extends Component {

  state = {
    toDoList: []
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let taskText = event.target.elements.toDoTask.value;
    if (taskText.length > 0) {
      this.setState({
        toDoList: [...this.state.toDoList, taskText]
      })
      event.target.reset();
    }
  }

  deleteTask = (index) => {
    let taskArr = [...this.state.toDoList];
    taskArr.splice(index, 1);
    this.setState({ toDoList: taskArr });
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

}

export default ToDoList;