import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state ={mouse:false}
  //鼠标是否在这个item上面
  handleMouse= (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }
  //点击checkbox的时候
  handleCheck= (id) => {
    return (event) => {
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleDelete=(id) => {
    return () => {
      if(window.confirm('确定删除吗')){
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const{id,name,done}=this.props
    const{mouse}=this.state
    return (
        <li style={{backgroundColor:mouse? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={this.handleDelete(id)} style={{display:mouse? 'block':'none'}}>删除</button>
      </li>
    )
  }
}
