import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

export default class Header extends Component {
  //对接收的props进行类型必要性的限制
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp= (event) => {
    const{keyCode,target}=event
    //判断不能为空
    if(target.value.trim()===""){
      alert('输入不能为空')
      return
    }
    //13 是enter的数字
    if(keyCode !==13){
      return
    }else{
      const todoObj ={id:nanoid(),name:target.value,done:false}
      this.props.addTodo(todoObj)
    }
    //清空输入
    target.value=""
   
  }
  render() {
    return (
      <div className="todo-header">
      <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
