import React,{Component,ProTypes,cloneElement} from 'react';
import classnames from 'classnames';
import TabNav from './TabNav.js';
import TabContent from './TabContent.js';

class Tabs extends Component{
	// 默认props
	static defaultProps={
		classPrefix:'tabs',
		onChange:()=>{}
	}


   constructor(props){
		super(props);
		this.state={
			activeIndex:0
		};
	}
	// 出来tab的点击事件
	handlerClick(activeIndex){
		this.setState({activeIndex});
	}

	// 获取tabNav
	renderTabNav(){
		const {classPrefix,children}=this.props;
		return (
				<TabNav key='tabNav' classPrefix={classPrefix} panels={children} onTabClick={this.handlerClick.bind(this)} activeIndex={this.state.activeIndex}></TabNav>
			)

	}
	// 获取TabContent
	renderTabContent(){
		const {classPrefix,children}=this.props;
		return (
				<TabContent key='tabcontent' classPrefix={classPrefix} panels={children} activeIndex={this.state.activeIndex} activeIndex={this.state.activeIndex}></TabContent>
			)
	}
	render(){
		var {className}=this.props;
		var cx=classnames(className,'ui-tabs')
		return (
			 <div className={cx}>
			  {this.renderTabNav()}
			  {this.renderTabContent()}
			 </div>
			)
	}

}
export default Tabs;