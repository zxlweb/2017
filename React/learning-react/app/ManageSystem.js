/**
 * Created by server on 2016/11/22.
 */
import React from 'react';
import StaffHeader from './StaffHeader';
import StaffItemPanel from './StaffItemPanel';
import StaffFooter from './StaffFooter';
import StaffDetail from './StaffDetail';
var rawData = [{ info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生'}},
    { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任'}},
    { info: {descrip:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师'}},
    { info: {descrip:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生'}},
    { info: {descrip:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习'}},
    { info: {descrip:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习'}}];
export default class App extends React.Component{
    render(){
        return(
            <div>
                <StaffHeader/>
                <StaffItemPanel items={rawData} />
                <StaffFooter/>
                <StaffDetail/>
            </div>
        )
    }
}

/*
React.render(<App />,document.getElementById('app'));*/
