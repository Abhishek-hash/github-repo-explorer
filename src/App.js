import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1>GitHub Repo Explorer</h1>
      <SearchBar />
      <RepoList />
    </div>
  </Provider>
);

export default App;