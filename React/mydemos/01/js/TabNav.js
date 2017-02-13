import React,{Component,ProTypes} from 'react';
import classnames from 'classnames';
class TabNav extends Component{
	
	getTabNav(){
		const {panels,classPrefix,activeIndex}=this.props;
		return React.Children.map(panels,(child)=>{
			let order=parseInt(child.props.order,10);
		    let cx=classnames({[`${classPrefix}-tab`]:true,
							   [`${classPrefix}-active`]:activeIndex==order});
		    // 自定义事件
		/*   let events={};
		    events={
		    	onClick:this.props.onTabClick.bind(this,order)
		    };*/
			if(!child){return ;}
			 return (
			 		<li className={cx} key={order} onClick={this.props.onTabClick.bind(this,order)}aria-selected={order===activeIndex?'true':'false'}>{child.props.tab}</li>
			 	)
		})


	}
	render(){
		const {classPrefix}=this.props;
		let cx=classnames({[`${classPrefix}-nav`]:true})
		return(
				<ul className={cx}>
				{this.getTabNav()}
				</ul>
			)
	}
}
export default TabNav;