import React, { Component } from 'react'
import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  //初始化状态
  state ={todos:[
    {id:'001',name:'吃饭',done: true},
    {id:'002',name:'睡觉',done: true},
    {id:'003',name:'代码',done: false}
  ]}

  addTodo =(todoObj) => {
    const{todos}=this.state
    // 追加一个todo
    const newTodos =[todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
    
  }
  //用于更新一todo对象的done值
  updateTodo=(id,done) => {
 
      const {todos}=this.state
      const newToDos= todos.map((todo) => {
        if(todo.id===id){
          return {...todo, done: done};
        }else{
          return todo
        }
      })
      this.setState({todos:newToDos})
  }

  deleteTodo=(id) => {
    const {todos}=this.state
    const newTodos = todos.filter((todo) => {
      return todo.id!==id
    })

    // 更新状态
    this.setState({todos:newTodos})
  }
  checkAll=(done) => {
    const {todos}=this.state
    const newTodos = todos.map((todo) => {
      return {...todo,done:done}
    })
    this.setState({todos:newTodos})
  }

  handleDone= () => {
    const{todos}=this.state
    const newTodos = todos.filter((todo) => {
      return todo.done===false
    })
    this.setState({todos:newTodos})
  }

  render() {
    const{todos}=this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAll={this.checkAll} handleDone={this.handleDone}/>
        </div>
      </div>
    )
  }
}