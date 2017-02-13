
'use strict';
import React from 'react';
class TodoFooter extends React.Component{

    handlerSelectAll(e){
        this.props.changeTodoState(e.target.checked,null,true);
    }
    //清除已经完成的
    handlerDeleteTodoDone(){
      this.props.deleteTodoDone();
        console.log('zhixngle ')
    }
    render (){
		return (
		<div className='todo-footer'>
         <label><input type='checkbox' checked={this.props.isAllChecked} onClick={this.handlerSelectAll.bind(this)}/>全选</label>
         <span>
         <span className='text-success'>已完成{this.props.todoDoneCount}</span>
         '/全部'{this.props.todoCount}
         </span>
         <button className='btn btn-danger' onClick={this.handlerDeleteTodoDone.bind(this)}>清除已完成的</button>
		</div>
		)
	}
}

export default TodoFooter;