/**
 * Created by server on 2016/11/22.
 */
import React from  'react';
export default class StaffHeader extends React.Component {
    render(){
        return (
            <div>
                <h3 style={{'text-align':'center'}}>人员管理系统</h3>
                <table className="optHeader">
                    <tr>
                        <td className="headerTd"><input type="text" placeholder="Searching…"/></td>
                        <td className="headerTd">
                            <label htmlFor="idSelect">人员筛选</label>
                            <select name="" id="idSelect">
                                <option value="0">全部</option>
                                <option value="1">主任</option>
                                <option value="2">老师</option>
                                <option value="3">学生</option>
                                <option value="4">实习</option>
                            </select>
                        </td>
                        <td>
                            <label htmlFor="orderSelect">排列方式</label>
                            <select name="" id="orderSelect">
                                <option value="0">身份</option>
                                <option value="1">年龄升</option>
                                <option value="2">年龄将</option>
                            </select>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}