import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

// const store = createStore(() => [], {}, applyMiddleware);

function App() {
  const [scrollDepth, setScrollDepth] = useState(0);

  function determineUserScrollDepth() {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrollDepth(scrolled);
  }

  useEffect(() => {
    window.addEventListener('scroll', determineUserScrollDepth);
  });

  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <PostForm />
          <Posts />
          <footer>
            Wow you've scrolled this: {Math.round(scrollDepth)}, far!
          </footer>
        </header>
      </div>
    </Provider>
  );
}

export default App;
