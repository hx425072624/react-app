import React, { Component } from 'react'
class Action extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }


  render () {
    let val = this.state.value
    return (
      <div>
        <input value={val} onChange={(e) => this.setState({ value: e.target.value })}></input>
        <button onClick={() => {
          this.props.onAdd(val)
          this.setState({
            value:''
          })
        }}>提交</button>
      </div>
    )
  }
}
export default Action