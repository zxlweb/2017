'use strict';
import React from 'react';
class TodoHeader extends React.Component{
    //this.props可以接受父组件传来的状态？
    handlerKeyUp(e){
      if(e.keyCode==13){
          let value=e.target.value;
          if(!value) return false;
          let newItem={
              text:value,
              isDone:false
          }
          e.target.value='';
          this.props.addTodo(newItem);
      }
    }
    render(){
        return(
            <div className='todo-header'>
                <input type="text" placeholder='请输入你的任务名称，按回车键确认' onKeyUp={this.handlerKeyUp.bind(this)} />
            </div>
        )
    }
}
export default TodoHeader;