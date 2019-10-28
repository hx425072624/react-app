import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import './index.scss'
const confirm = title => {
  let currentMsg = null
  let result = new Promise((resolve, reject) => {
    currentMsg = { resolve, reject }
  })
  const div = document.createElement('div')
  document.body.appendChild(div)
  function defaultCallBack (action) {
    if (action === '是') {
        currentMsg.resolve('是')
    } else if(action === '否') {
        currentMsg.resolve('否')
    }
    else{
      currentMsg.rejects()
    }
    close()
  }
  // function clickOk() {
  //   close()
  // }
  // function cancel() {
  //   close()
  // }
  function close() {
  
    const unmountResult = ReactDOM.unmountComponentAtNode(div)
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
  function render() {
    ReactDOM.render(
      <div>
        <p>{title}</p>
        <button onClick={defaultCallBack.bind(this,"是")}>是</button>
        <button onClick={defaultCallBack.bind(this,"否")}>否</button>
      </div>,
      div
    )
  }

  render()
  return result
}

export default confirm
