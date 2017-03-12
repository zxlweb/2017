'use strict';
import React from 'react';
import $ from 'jquery';
class Main extends React.Component{
  
 
  render(){
     let listItemNode=this.props.items.map(item => {
    return(
             <a className="list-group-item" href="#">
              <div className="media">
               <div className="media-left">
                <img  src={'../src/static/img/'+item.src}/>
               </div>
               <div className="media-body">
                 <h3 className="media-heading">菜名</h3>
                 <p>原料：{item.material}</p>
                 <p>价格:{item.price}</p>
               </div>
              </div>
             </a>

      );
  });
    return(
      <div className="main container">
       <h2>主菜单页</h2>
       <form>
        <div className="form-group has-feedback">
        <label className="sr-only" htmlFor="kw">搜索关键字</label>
        <input className="form-control" type="text" id="kw" placeholder="请输入待搜索的菜品或原料"/>
        <span className="glyphicon glyphicon-search form-control-feedback"></span>
        </div>
       </form>

       <div className="list-group">
        {listItemNode}
       </div>
       <button  className="btn btn-success btn-block">加载更多</button>
       <div  className="alert alert-danger">
       <span className="glyphicon glyphicon-alert"></span>
       已经没有更多数据可供加载了！
       </div>
    </div>

      );
  }
}


export default  Main;

