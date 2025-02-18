import React from 'react';
import { useSelector } from 'react-redux';
import RepoCard from './RepoCard';

const RepoList = () => {
  const { data, status, error } = useSelector((state) => state.repos);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="repo-list">
      {data.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
