import React,{Component,PropType,cloneElement} from 'react';
import classnames from 'classnames';
class TabContent extends Component{
	// 获取tabContent中的tabPanel
	getTabPanel(){
		const {panels,classPrefix,activeIndex}=this.props;
		return React.Children.map(panels,(child)=>{
			let order=parseInt(child.props.order);
			if(!child){return ;}
			return React.cloneElement(child,
				{classPrefix,
				 children:child.props.children,
				 key:`tabpane-${order}`,
				 isActive:order==activeIndex,
				 activeIndex})
		})
	}
  render(){
  	const {classPrefix,activeIndex}=this.props;
  	let classes=classnames({[`${classPrefix}-content`]:true})
  	return (
  			<div className={classes}>
  				{this.getTabPanel()};
  			</div>
  		)
  }
}
export default TabContent;