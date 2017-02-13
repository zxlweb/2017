'use strict';
import React from 'react';
import LocalDb from "LocalDb";
import TodoHeader from './TodoHeader.js';
import TodoMain from './TodoMain.js';
import TodoFooter from './TodoFooter.js';
class App extends React.Component{
	constructor() { //定义App类的构造函数
		super(); //调用父类的构造函数
		this.db = new LocalDb('ReactDemo');
		var isAllChecked=(this.db.get('todos').length!=0&&this.db.get('todos').every((todo)=>{return todo.isDone}))||false;
		this.state = { //定义组件状态
			todos: this.db.get('todos') || [],
			isAllChecked: isAllChecked
		};
	}
	//检查是否全部选中
	checkAll(){
		let isAllChecked=false;
		if(this.state.todos.every(todo=>todo.isDone)){
			isAllChecked=true;
		}
		this.setState({//改变组件的状态，重绘
			todos:this.state.todos,
			isAllChecked:isAllChecked
		})
	}
	//添加任务的方法，传递给header
	addTodo(item){
		this.state.todos.push(item);
		this.db.set('todos',this.state.todos);
		this.checkAll();
	}
	//删除任务的方法，传递个每一个列表项
	deleteTodo(index){
		this.state.todos.splice(index,1);
		this.setState({todos: this.state.todos});  //改变状态
		this.db.set('todos',this.state.todos);
	}

	//清除已经完成的任务的方法，传递个footer
	clearDone(){
		let  todo=this.state.todos.filter(arr=>{return !arr.isDone})
		this.setState({
			todos: todo,
			isAllChecked: false
		});
		this.db.set('todos', todo);
	}
	//改变任务状态的方法，传递给item和footer
	changeTodoState(isDone,index,isAllChange=false){
		if(isAllChange){
			this.setState({
					todos:this.state.todos.map((todo)=>{todo.isDone=isDone;return todo}),
					isAllChecked:isDone
				}
			);
		}else{
			//找到todos数组下标为index的数据
			//设置其isDone属性为isDone;
			this.state.todos[index].isDone=isDone;
			this.checkAll();
		}
		this.db.set('todos', this.state.todos);
	}

	render(){
		let info={
			todoCount:this.state.todos.length||0,
			todoDoneCount:(this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0,
		    isAllChecked:this.state.isAllChecked
		}
		return (
		<div className='todo-wrap'>
			<TodoHeader addTodo={this.addTodo.bind(this)}></TodoHeader>
			<TodoMain todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)}></TodoMain>
			<TodoFooter {...info} changeTodoState={this.changeTodoState.bind(this)} deleteTodoDone={this.clearDone.bind(this)}></TodoFooter>
		</div>
		)
	}
}

React.render(<App/>,document.getElementById('app'));