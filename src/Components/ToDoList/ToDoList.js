import React, { Component } from 'react'
import Action from './Action'
import List from './List'
class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [1, 2, 3, 4]
    }
  }
  onAdd (val) {
    let data = this.state.data
    data.push(val)
    this.setState({ data })
  }
  render () {
    return (
      <div>
        <Action onAdd={this.onAdd.bind(this)}></Action>
        <List data={this.state.data}></List>
      </div>
    )
  }
}
export default ToDoList