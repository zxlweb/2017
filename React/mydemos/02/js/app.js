import  React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import emitter from './events.js';
class App extends Component{
 componentDidMount() {
   this.itemChange=emitter.addListener('ItemChange',(msg,data)=>{
    console.log(data);
   });
 }
  componentWillUnmount() {
    emitter.removeListener(this.itemChange);
  }
  render(){
    return (
      <List list={[{text:1},{text:2}]}></List>
      )
  }

}
ReactDOM.render(<App/>,document.getElementById('root'));
