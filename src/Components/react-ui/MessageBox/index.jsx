import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
class MessageBox extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {
    name: ''
  }
  render() {
    const { name, ...rest } = this.props
    return <div {...rest} className={`${name}`} />
  }
}

export default MessageBox