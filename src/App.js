import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Icon from './Components/react-ui/Icon'
import Button from './Components/react-ui/Button'
import Input from './Components/react-ui/Input'
import InputNumber from './Components/react-ui/InputNumber'
import Tabs, { TabPane } from './Components/react-ui/Tabs'
import MobxView from './Components/Mobx/MobxView'
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter
} from './Components/react-ui/Panel'
import SearchInput from './Components/react-ui/SearchInput/SearchInput'
import Pagination from './Components/react-ui/Pagination'
import LifeCircles from './Components/LifeCircles/LifeCircles'
import confirm from './Components/react-ui/Confirm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      tabs: [
        { id: 1, name: 'tab1', content: 'wo' },
        { id: 2, name: 'tab2', content: 'shi' },
        { id: 3, name: 'tab3', content: 'nb' }
      ],
      words: [],
      callback: key => {
        console.log(key)
      },
      pageIndex: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value) {
    let words = []
    if (value) {
      words = ['123', '456', '678']
    }
    this.setState({
      words,
      value
    })
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
        <br />
        <Tabs defaultActiveKey={'1'} onChange={this.state.callback}>
          {this.state.tabs.map(tab => (
            <TabPane tab={tab.name} key={tab.id.toString()}>
              {tab.content}
            </TabPane>
          ))}
        </Tabs>

        <br />
        <MobxView />
        <Panel>
          <PanelHeader>
            <h1>头</h1>
          </PanelHeader>
          <PanelBody>体</PanelBody>
          <PanelFooter>尾</PanelFooter>
        </Panel>
        <br />
        <SearchInput
          words={this.state.words}
          value={this.state.value}
          onChange={this.handleChange}
          callback={this.state.callback}
        ></SearchInput>
        <br />

        <Pagination
          current={this.state.pageIndex}
          onChange={e => {
            this.setState({ pageIndex: e })
          }}
          total={1745693}
        ></Pagination>

        <br />
        <LifeCircles></LifeCircles>
        <br />
        <InputNumber  defaultValue={this.value}
          onChange={e => {
            this.value = e.target.value
          }}
          size="large"></InputNumber>
          <br />
          
      </div>
    )
  }
 async componentDidMount(){
  let res =  await confirm('hahah')
  console.log(res)
  }
}

export default App
