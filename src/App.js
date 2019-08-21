import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Icon from './Components/react-ui/Icon'
import Button from './Components/react-ui/Button'
import Input from './Components/react-ui/Input'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  value = '123'
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Icon />
        <br />
        <Button icon="xingxing1" type="primary">
          提交
        </Button>
        <Button icon="loading" type="warning" spin>
          提交
        </Button>
        <br />
        <Input
          value={this.state.value}
          onChange={e => {
            this.setState({
              value: e.target.value
            })
          }}
        />
        <Input
          addonBefore="xingxing1"
          addonAfter="xingxing1"
          defaultValue={this.value}
          onChange={e => {
            this.value = e.target.value
            
          }}
          size="large"
        />
        <Input size="small" defaultValue={this.value} />
      </div>
    )
  }
}

export default App
