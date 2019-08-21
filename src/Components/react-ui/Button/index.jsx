import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../icon-font/iconfont.css'
import './index.scss'
import Icon from '../Icon'
class Button extends Component {
  static propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string,
    spin: PropTypes.bool
  }
  static defaultProps = {
    spin: false,
    type: 'primary'
  }
  render() {
    const { icon, spin, type, children, ...rest } = this.props

    return (
      <button
        className={`react-ui__btn--${type}`}
        {...rest}
      >
        {icon && <Icon name={icon} spin={spin} />}
        {children}
      </button>
    )
  }
}

export default Button
