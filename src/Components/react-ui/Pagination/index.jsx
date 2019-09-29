import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      innerCurrent: 1
    }
  }
  static propTypes = {
    name: PropTypes.string,
    defaultCurrent: PropTypes.number,
    current: PropTypes.number,
    onChange: PropTypes.func,
    total: PropTypes.number
  }
  static defaultProps = {
    name: '',
    defaultCurrent: 1,
    current: 1,
    onChange: () => {},
    total: 0
  }
  get isControl() {
    return 'current' in this.props
  }
  get current() {
    if (this.isControl) {
      return this.props.current
    } else {
      return this.state.innerCurrent
    }
  }

  render() {
    const {
      name,
      defaultCurrent,
      current,
      onChange,
      total,
      ...rest
    } = this.props

    console.log(current)
    let paging = [] // 初始化
    paging.push(
      <li
        key={'pre'}
        onClick={e => {
          if (current > 1) {
            onChange(current - 1)
          }
        }}
        disabled={current <= 1}
      >
        <span>pre</span>
      </li>
    ) //上一页
    // 分页数据

    for (let i = 1; i <= total; i++) {
      if (i === 2 && current - 3 > 1) {
        i = current - 3
      } else if (i === current + 3 && current + 3 < total) {
        i = total - 1
      } else {
        if (i === current) {
          paging.push(
            <li
              key={i}
              onClick={e => {
                onChange(current)
              }}
              className={'active'}
            >
              <span>{i}</span>
            </li>
          )
        } else {
          if (i === current - 2 && i > 2) {
            paging.push(
              <li
                key={'-5p'}
                onClick={e => {
                  onChange(i - 5)
                }}
              >
                <span>...</span>
              </li>
            )
          }
          paging.push(
            <li
              key={i}
              onClick={e => {
                onChange(i)
              }}
            >
              <span>{i}</span>
            </li>
          )

          if (i === current + 2 && i < total) {
            paging.push(
              <li
                key={'+5p'}
                onClick={e => {
                  onChange(i + 5)
                }}
              >
                <span>...</span>
              </li>
            )
          }
        }
      }
    }

    paging.push(
      <li
        key={'next'}
        onClick={e => {
          if (current < total) {
            onChange(current + 1)
          }
        }}
        disabled={current >= total}
      >
        <span>next</span>
      </li>
    ) //下一页
    // const { innerCurrent } = this.state
    return (
      <div {...rest} className={`${name}`}>
        <ul>{paging}</ul>
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      innerCurrent: this.props.defaultCurrent
    })
  }
}

export default Pagination
