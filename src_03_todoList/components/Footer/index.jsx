import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll=(event) => {
    this.props.checkAll(event.target.checked)
  }
  handleDone=() => {
    if(window.confirm('确定删除吗')){
      this.props.handleDone()
    }
  }
  render() {
    const{todos}=this.props
    //计算已经完成的
    //reduce 函数在{}后面的是初始值 pre 是上一次的返回数值
    const doneCount = todos.reduce((pre,currentTodo) => {return pre+(currentTodo.done?1:0)},0)
    const totalLength =todos.length 
    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount===totalLength && totalLength!==0?true:false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalLength}
        </span>
        <button className="btn btn-danger" onClick={this.handleDone}>清除已完成任务</button>
      </div>
    )
  }
}
