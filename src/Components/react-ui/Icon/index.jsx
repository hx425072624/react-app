import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../icon-font/iconfont.css'
import './index.scss'
class Icon extends Component {
  static propTypes = {
    name: PropTypes.string,
    spin: PropTypes.bool
  }
  static defaultProps = {
    name: 'xingxing1',
  }
  render () {
    const { name, spin, ...rest } = this.props
    return (
      <i {...rest} className={`iconfont icon-${name} ${spin?'spin':''}`}></i>
    )
  }
}

export default Icon