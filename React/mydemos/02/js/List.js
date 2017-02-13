import  React ,{Component} from 'react';
import ListItem from './ListItem.js';
import emitter from './events.js';
class List extends Component{

	constructor(props){
		super(props);
		this.state={
			list:this.props.list.map(entry=>({
				text:entry.text,
				checked:entry.checked||false
			})
		)}

	}
	onItemChange(entry){
		const {list}=this.state;
		this.setState({
			list:list.map(prevEntry=>({
				text:prevEntry.text,
				checked:prevEntry.text==entry.text?
						!prevEntry.checked:prevEntry.checked
			}))
		});
		// this.props.handleItemChange(entry)
		emitter.emitEvent('ItemChange',entry);
	}
	render(){
		
		return(
		
				<ul>
				{this.state.list.map(entry=>{
					 return	<ListItem value={entry.text} checked={entry.checked} onChange={this.onItemChange.bind(this,entry)}/>
					})
				}
				</ul>

			)
	}


}
export default List;