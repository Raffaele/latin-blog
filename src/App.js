import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PostList from './components/PostList/PostListData';
import PostDetails from './components/PostDetails/PostDetailsData';
import storeManager from './store/store';

import './App.css';

function App () {
  return (
      <div className="App">
        <Provider store={storeManager.store}>
          <Router>
            <h1 className="App__title">Latin blog</h1>
            <Route exact path="/" component={PostList} />
            <Route exact path="/post/author-:authorId/post-:postId" component={PostDetails} />
          </Router>
        </Provider>
      </div>
  );
}

export default App;
