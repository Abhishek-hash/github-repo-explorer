import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRepos } from '../redux/repoSlice';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = debounce((value) => {
    if (value.trim() !== '') {
      dispatch(fetchRepos(value));
    }
  }, 500);

  const onChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search GitHub Repositories..."
      value={query}
      onChange={onChange}
      className="search-bar"
    />
  );
};

export default SearchBar;