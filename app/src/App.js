import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchArticles } from './redux/articles/article.actions';

import Header from './components/header/header';
import Article from './components/articles/articles';

class App extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <Article />
          {this.props.error !== '' ? <h4>{this.props.error}</h4> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchArticles })(App);
