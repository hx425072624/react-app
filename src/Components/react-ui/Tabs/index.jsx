import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
export class TabPane extends Component {
  static propTypes = {
    tab: PropTypes.string,
    active: PropTypes.bool,
    onChangeTab: PropTypes.func
  }
  static defaultProps = {
    tab: ''
  }
  render() {
    const { tab, active, onChangeTab } = this.props
    return (
      <li className={active ? 'active' : ''} onClick={onChangeTab}>
        {tab}
      </li>
    )
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changeTab: key => {
        this.setState({
          activeKey: key
        })
      },
      activeKey: '0',
      tabContent: {}
    }
  }

  static propTypes = {
    defaultActiveKey: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultProps = {
    defaultActiveKey: '0',
    className: ''
  }

  render() {
    const {
      defaultActiveKey,
      onChange,
      className,
      children,
      ...rest
    } = this.props
    const { activeKey, changeTab } = this.state
    let content = null

    return (
      <div>
        <ul className={`react-ui__nav nav-tabs ${className}`} {...rest}>
          {React.Children.map(children, (child, index) => {
            //todo：judge the child is TabPane or not
            const active = child.key === activeKey
            if (active) {
              content = child.props.children
            }
            return React.cloneElement(child, {
              active: active,
              tab: child.props.tab,
              onChangeTab: () => {
                changeTab(child.key)
                onChange(child.key)
              },
              key: child.key || index
            })
          })}
        </ul>
        <div>{content}</div>
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      activeKey: this.props.defaultActiveKey
    })
  }
}

export default Tabs
