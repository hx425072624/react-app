import React, { Component } from 'react'
import TimerView from './TimerView'
import { get, set, observable, values ,action, autorun } from 'mobx'
import {Provider} from 'mobx-react'
var todoStore = observable({
  /* 一些观察的状态 */
  todos: [],

  /* 推导值 */
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length
  }
})

/* 观察状态改变的函数 */
autorun(function() {
  console.log(
    'Completed %d of %d items',
    todoStore.completedCount,
    todoStore.todos.length
  )
  console.log(todoStore.todos)
})


/* ..以及一些改变状态的动作 */
todoStore.todos[0] = {
  title: 'Take a walk',
  completed: false
}
// -> 同步打印 'Completed 0 of 1 items'

todoStore.todos[0].completed = true

var appState = observable({
  timer: 0
})
appState.resetTimer = action(function reset() {
  appState.timer = 0
})

setInterval(
  action(function tick() {
    appState.timer += 1
  }),
  1000
)

const twitterUrls = observable.object({
  "John": "twitter.com/johnny"
})

autorun(() => {
  console.log(get(twitterUrls, "Sara")) // get 可以追踪尚未存在的属性
})

autorun(() => {
  console.log("All urls: " + values(twitterUrls).join(", "))
})

set(twitterUrls, { "Sara" : "twitter.com/horsejs"})


class MobxView extends Component {
  render() {
    return (
      <Provider appState={appState}>
        <TimerView  />
      </Provider>
    )
  }
}

export default MobxView
