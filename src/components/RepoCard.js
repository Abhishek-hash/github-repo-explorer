import React from 'react';

const RepoCard = ({ repo }) => {
  const repoStyle = {
    color: "#000",
    fontSize: "18px"
  };
  const truncateText = (text, limit) => {
    if (!text) return "No description available.";
    if (text.length <= limit) return text;

    const trimmedText = text.substring(0, limit);
    const lastSpaceIndex = trimmedText.lastIndexOf(" ");

    return (
      <>
        {trimmedText.substring(0, lastSpaceIndex)}
        <span className="see-more">
          ...{" "}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            See more on GitHub
          </a>
        </span>
      </>
    );
  };

  return (

    <div className="repo-card">
      <h3><span style={repoStyle}>Repo Name: </span>{repo.name}</h3>
      <p><span style={repoStyle}>Repo Description: </span>{truncateText(repo.description, 100)}</p> {/* Show only 100 characters */}
      <span style={repoStyle}>Github Link: </span><a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default RepoCard;