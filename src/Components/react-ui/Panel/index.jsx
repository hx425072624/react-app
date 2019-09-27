import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PanelHeader from './PanelHeader'
import PanelBody from './PanelBody'
import PanelFooter from './PanelFooter'
import './index.scss'
class Panel extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {
    name: 'panel'
  }
  render() {
    const { name, children,...rest } = this.props
    return <div {...rest} className={`${name}`} >
        {React.Children.map(children, (child, index) => {
            // 只展示复合panel组件的内容
            if(child.type ===  PanelHeader || child.type === PanelBody|| child.type === PanelFooter){
                return child
            }
        })}
    </div>
  }
}
export default Panel
export  {Panel,PanelHeader,PanelBody,PanelFooter}