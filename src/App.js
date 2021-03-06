import React, {Component} from 'react';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with friends',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with investor',
        completed: false
      }
    ]
  }
   
  render() {
    console.log(this.state.todos)
    
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
