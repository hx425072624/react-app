import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
// import LifeCircles from "./Components/LifeCircles/LifeCircles";
// import AlarmClock from "./Components/Clock/AlarmClock";
// import ToDoList from "./Components/ToDoList/ToDoList";
// import Clock from "./Components/Clock/Clock";
// import Greeting from './Components/LoginControl/Greet';
// import Toggle from "./Components/Toggle";
// import LoginControl from './Components/LoginControl/LoginControl'
// import MailBox from './Components/MailBox'
// const messages=['react','Re:react']
// import Calculator from "./Components/Calculator/Calculator";
// import FilterableProductTable from "./Components/Mock/FilterableProductTable";
// const products = [
//   {
//     category: "Sporting Goods",
//     price: "$49.99",
//     stocked: true,
//     name: "Football"
//   },
//   {
//     category: "Sporting Goods",
//     price: "$9.99",
//     stocked: true,
//     name: "Baseball"
//   },
//   {
//     category: "Sporting Goods",
//     price: "$29.99",
//     stocked: false,
//     name: "Basketball"
//   },
//   {
//     category: "Electronics",
//     price: "$99.99",
//     stocked: true,
//     name: "iPod Touch"
//   },
//   {
//     category: "Electronics",
//     price: "$399.99",
//     stocked: false,
//     name: "iPhone 5"
//   },
//   { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
// ];
// ReactDOM.render(
//   <FilterableProductTable products={products} />,
//   document.getElementById("root")
// );

// ReactDOM.render(<MailBox  unreadMessage={messages}/>, document.getElementById("root"));
// import Theme from "./Components/Theme/Theme";
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById('root')); If you want your
// app to work offline and load faster, you can change unregister() to
// register() below. Note this comes with some pitfalls. Learn more about
// service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
