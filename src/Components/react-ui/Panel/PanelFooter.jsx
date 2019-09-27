import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
class PanelFooter extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {
    name: 'panel-footer',
  }
  render() {
    const { name,children, ...rest } = this.props
    return <div {...rest} className={`${name}`}>{children}</div>
  }
}

export default PanelFooter