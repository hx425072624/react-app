import React, { Component } from 'react'
class List extends Component {
  render () {
    return (
      <div>
        {
          this.props.data.map((item) => <p key={item}>{item}</p>)
        }
      </div>
    )
  }
}
export default List