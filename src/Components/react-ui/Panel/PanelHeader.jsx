import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
class PanelHeader extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {
    name: 'panel-header'
  }
  render() {
    const { name,children, ...rest } = this.props
    return <div {...rest} className={`${name}`}>{children}</div>
  }
}

export default PanelHeader