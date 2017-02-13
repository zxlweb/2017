'use strict';
import React from 'react';
class TodoItem extends React.Component{
    //状态的改变
    handlerChange(){
        let isDone=!this.props.isDone;
        this.props.changeTodoState(isDone,this.props.index);
    }
    //删除
    handlerDeleteTodo(){
        this.props.deleteTodo(this.props.index);
    }
    //鼠标悬浮
    handlerMouseOver(){
        React.findDOMNode(this).style.background='#eee';
        React.findDOMNode(this.refs.delButton).style.display='inline-block';
    }
    //鼠标离开
    handlerMouseOut(){
        React.findDOMNode(this).style.background='';
        React.findDOMNode(this.refs.delButton).style.display='none';
    }
   render(){
       let className=this.props.isDone ? 'task-done':'';
       return (
          <li onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
              <label>
                  <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
                  <span className={className}>{this.props.text}</span>
              </label>
              <button ref='delButton' className='btn btn-danger'onClick={this.handlerDeleteTodo.bind(this)}>删除</button>
          </li>
       )
   }
}
export default TodoItem;
