import  React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
class App extends Component{
  constructor(props) {
    super(props);
    this.handleItemChange=this.handleItemChange.bind(this);
    
  }
  handleItemChange(item){
    console.log(item);
  }
  render(){
    return (
      <List list={[{text:1},{text:2}]} handleItemChange={this.handleItemChange}></List>
      )
  }

}
ReactDOM.render(<App/>,document.getElementById('root'));
