import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Panel, PanelHeader, PanelBody } from '../Panel'
// import Input from '../Input'
import './index.scss'
class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: -1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func, //受控组件同时设置value和onChange

    name: PropTypes.string,
    words: PropTypes.array,
    callback: PropTypes.func
  }
  static defaultProps = {
    value: '',
    name: '',
    words: [],
    onChange: val => {},
    callback: val => {}
  }
  handleChange(e) {
    let val = e.target.value
    this.setState({
      index: -1
    })
    this.props.onChange(val)
  }
  handleKeyDown(e) {
    let code = e.keyCode
    let { index, value } = this.state
    let length = this.props.words.length
    if (code === 38) {
      //上方向键
      index--
      if (index < -1) {
        index = length - 1
      }
    } else if (code === 40) {
      //下方向键
      index++
      if (index >= length) {
        index = 0
      }
    } else if (code === 13) {
      //回车
      this.props.callback(index === -1 ? value : this.props.words[index])
    }
    this.setState({ index })
  }
  render() {
    const {
      name,
      words,
      callback,
      size,
      value,
      addonAfter,
      addonBefore,
      onChange,
      ...rest
    } = this.props
    const { index } = this.state
    return (
      <div {...rest} className={`${name}`}>
        <Panel>
          <PanelHeader>
            <input
              type="text"
              value={index === -1 ? value : words[index]}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          </PanelHeader>
          <PanelBody>
            <ul>
              {words.map((word, ind) => {
                return (
                  <li key={word} className={ind === index ? 'active' : ''}>
                    {word}
                  </li>
                )
              })}
            </ul>
          </PanelBody>
        </Panel>
      </div>
    )
  }
}

export default SearchInput
