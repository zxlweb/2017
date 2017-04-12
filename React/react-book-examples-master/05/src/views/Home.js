import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import {bindActionCreators} from 'redux';
import { push } from 'react-router-redux';

function mapStateToProps(state){
  return {
    articleList: state.home.list.articleList,
  }

}
// inject actions  and  push  directly as props 
function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators(actions,dispatch),
    push:bindActionCreators(push,dispatch)
   }
}

class Home extends React.Component {
  render() {
    const { loadArticles, articleList, push } = this.props;
     return (
      <div>
        <h1>Home</h1>
        <PreviewList {...this.props} />
      </div>
    );
  }
}
//将state和dispatch  注入  到组件中   
// connect() 返回一个新的组件，state 和dispatch  作为  该组件的props  传递给  Home 这个被包裹的组件
connect(mapStateToProps,mapDispatchToProps)(Home);

export default Home;
