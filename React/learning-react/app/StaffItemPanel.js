/**
 * Created by server on 2016/11/22.
 */
import React from 'react';
import staffItem from './StaffItem.js';
export default class StaffItemPanel extends React.Component{
    render(){
        let items = [];
        if(this.props.items.length == 0){
            items.push(<tr><th colspan="5" className="tempEmpty">暂无用户</th></tr>);
        }else {
            this.props.items.forEach(item =>{
                items.push(<staffItem key={item.key} item={item} />);
            })
        }
        return(
            <table className="itemPanel">
                <thead>
                    <th className="itemTd">姓名</th>
                    <th className="itemTd">年龄</th>
                    <th className="itemTd">身份</th>
                    <th className="itemTd">性别</th>
                    <th className="itemTd">操作</th>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
}