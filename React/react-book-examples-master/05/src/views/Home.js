import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';

function mapStateToProps(state){
  return {
    articleList: state.home.list.articleList,
  }

}
function mapDispatchToProps(actions){
  return {
   ...actions,
   push
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
connect(mapStateToProps,mapDispatchToProps)(Home);

export default Home;
