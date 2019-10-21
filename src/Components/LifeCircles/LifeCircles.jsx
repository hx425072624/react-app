import React, { Component } from 'react'
class LifeCircles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'react'
    }
  }
  render() {
    console.log('LifeCircles render')
    return (
      <div>
        LifeCircles{this.state.name}
        {this.state.name && <Son1 name={this.state.name + '-son'} />}
      </div>
    )
  }
  componentDidMount() {
    window.app = this
    console.log('LifeCircles mount')
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('LifeCircles will update')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('LifeCircles did update')
  }
  componentWillUnmount() {
    console.log('LifeCircles will Unmount')
  }
  
}

class Son1 extends Component {
  render() {
    console.log('Son1 render')
    return (
      <div>
        Son1 {this.props.name}
        <GrandSon1 name={this.props.name + 'grandson'} />
      </div>
    )
  }

  componentDidMount() {
    console.log('Son1 mount')
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Son1 will update')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Son1 did update')
  }
  componentWillUnmount() {
    console.log('Son1 will Unmount')
  }
}
class GrandSon1 extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'GrandSon1'
    }
  }
  render() {
    console.log('GrandSon1 render')
    return (
      <div>
        GrandSon1
        {this.props.name}
        {this.state.name}
      </div>
    )
  }
  componentDidMount() {
    window.grandson = this
    console.log('GrandSon1 mount')
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('GrandSon1 will update')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('GrandSon1 did update')
  }
  componentWillUnmount() {
    console.log('GrandSon1 will Unmount')
  }
}

// componentDidMount 子组件componentDidMount完成之后才会继续执行父组件的componentDidMount
// render 父组件先执行render 然后再执行子组件的render
export default LifeCircles
