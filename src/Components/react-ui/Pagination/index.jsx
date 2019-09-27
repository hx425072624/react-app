import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      innerCurrent: 1,
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
    // const { innerCurrent } = this.state
    return (
      <div {...rest} className={`${name}`}>
        {() => {
          let paging = [] // 初始化 
          paging.push(<span>pre</span>)//上一页
          // 分页数据
          for (let index = 1; index <= total; index++) {
            if (index ===1||index === total) {
              paging.push(<span>{index}</span>)
            }
            else{

            }
          }

          paging.push(<span>next</span>)//下一页
          return paging
        }}
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
