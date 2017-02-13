import React ,{Component,propType}from 'react';
import classnames from 'classnames';
class TabPane extends Component{
	// 最末端的组件，只有最简单的渲染
	render(){
		const {classPrefix,activeIndex,isActive}=this.props;
		let cx=classnames({[`${classPrefix}-panel`]:true,
						   [`${classPrefix}-active`]:isActive}
			);
	
		return(
				<div className={cx} aria-hidden={!isActive}>{this.props.children}</div>
			)
	}
}
export default TabPane;