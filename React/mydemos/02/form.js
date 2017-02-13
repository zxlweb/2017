/**
 * Created by think on 2017/1/12.
 */
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';


class App extends Component{
	constructor(props) {
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.state={
			area:['shanghai','guangzhou']
		}
	}
	/*handleChange(e){
		this.setState({
			radioValue:e.target.value
		})
	}


	render() {
		const {radioValue}=this.state;
		return( 
			<div>
				<p>gender:</p>
				<label>
					male: <input type='radio' value='male' checked={radioValue=='male'}
						onChange={this.handleChange}/>
				</label>
				<label>
					female: <input type='radio' value='female' checked={radioValue=='female'}
						onChange={this.handleChange}/>
				</label>
			</div>
			)
			
	}*/
/*
	handleChange(e){
		const {checked,value}=e.target;
		let {coffee}=this.state;
		if(checked&&coffee.indexOf(value)==-1){
			coffee.push(value);
		}else {
			coffee.filter(i=>{i!==value});
		}
		this.setState({
			coffee
		})

	}
	render(){
		const {coffee}=this.state;
		return (
			<div>
				<p>请选择你喜欢的咖啡：</p>
				<label>
				<input type='checkbox' 
				 value='Cappuccino'
				 checked={coffee.indexOf('Cappuccino')!==-1}
				 onChange={this.handleChange}
				/>Cappuccino
				</label>
				<br/>
				<label>
				<input type='checkbox' 
				 value='CafeMocha'
				 checked={coffee.indexOf('CafeMocha')!==-1}
				 onChange={this.handleChange}
				/>CafeMocha
				</label>
				<br/>
				<label>
				<input type='checkbox' 
				 value='CafeLatte'
				 checked={coffee.indexOf('CafeLatte')!==-1}
				 onChange={this.handleChange}
				/>CafeLatte
				</label>
			</div>
			

			)
	}*/
	handleChange(e){
		const {options}=e.target;
		console.log(e.target);
		console.log(Object.keys(options));
		
		var aa=Object.keys(options).filter(i=>{console.log(options[i]);options[i].selected===true});
		const area=aa.map(i=>options[i].value);
		this.setState=({
			area,
		})

		
	}
	render(){
		const {area}=this.state;
		return (
			<select multiple={true} value={area} onChange={this.handleChange.bind(this)} >
				<option value='beijing'>北京</option>
				<option value='shanghai'>上海</option>
				<option value='guangzhou'>广州</option>
			</select>

			)
	}
}
ReactDOM.render(<App/>,document.getElementById('root'));