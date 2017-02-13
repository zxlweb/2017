/**
 * Created by think on 2017/1/12.
 */
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs.js';
import TabPane from './TabPane.js';
import styles from '../css/style.scss';

class App extends Component{
	constructor(props) {
		super(props);
		this.state={
			activeIndex:0
		}
	}

	render() {
		return( 
			<div>
				<div className='operator'>
				 <span>切换 Tab：</span>
				 <select>
				 	<option value="0">Tab 1</option>
				 	<option value="1">Tab 2</option>
				 	<option value="2">Tab 3</option>
				 </select>
				</div> 
			 <Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
             	<TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
         	 	<TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
        	 	<TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
       		 </Tabs>
			</div>);
	}
}
ReactDOM.render(<App/>,document.getElementById('root'));