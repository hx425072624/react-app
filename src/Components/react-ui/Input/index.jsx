import React, { Component } from 'react'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.scss'
class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      innerValue: ''
    }
  }

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func, //受控组件同时设置value和onChange

    defaultValue: PropTypes.string, //非受控组件
    size: PropTypes.string,
    addonAfter: PropTypes.string,
    addonBefore: PropTypes.string
  }
  static defaultProps = {
    size: 'middle',
    onChange: () => {}
  }

  get isControl() {
    return 'value' in this.props
  }

  get value() {
    if (this.isControl) {
      return this.props.value
    } else {
      return this.state.innerValue
    }
  }


  render() {
    const { onChange, size, addonAfter, addonBefore } = this.props
    const { focus } = this.state
    const inputClass = classNames({
      input: true,
      focus: focus,
      [`size-${size}`]: true,
      'react-ui__input': true
    })
    return (
      <div className={inputClass}>
        {addonBefore && <Icon name={addonBefore} />}
        <input 
          value={this.value}
          onChange={e => {
            if (!this.isControl) {
              this.setState({
                innerValue: e.target.value
              })
            }
            onChange(e)
          }}
          onFocus={e => {
            this.setState({
              focus: true
            })
          }}
          onBlur={e => {
            this.setState({
              focus: false
            })
          }}
        />
        {addonAfter && <Icon name={addonAfter} />}
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }
}
export default Input
