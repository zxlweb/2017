'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import Main from './Componet/Main/main.js';
import './static/css/app.css';
import './static/css/bootstrap.css';
import $ from 'jquery';
class App extends React.Component{

    constructor(props) {
        super(props);
        this.state={itemArr:[]};
        this.getDishList();
        setInterval(this.getDishList,500);
      }
    getDishList(){
          $.ajax({
            url:'src/data/dish_getbypage.php?start=0',
            success:data =>{
                this.setState({
                    itemArr:data
                })
            }
        })

    }
  

    render(){

       
        return(
            <div> <Main items={this.state.itemArr}/></div>
           
        )
    }
}


ReactDom.render(<App/>,document.getElementById('app'))