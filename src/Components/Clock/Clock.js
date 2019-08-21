import React, { Component } from 'react'
class Clock extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock
