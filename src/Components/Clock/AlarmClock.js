import React, { Component } from 'react'
class AlarmClock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  render () {
    let { time, callback } = this.props
    this.state.date.toTimeString() === time.toTimeString() && callback()
    return (
      <div>
        <h1>{this.state.date.toTimeString()}</h1>
      </div>
    )
  }
}

export default AlarmClock