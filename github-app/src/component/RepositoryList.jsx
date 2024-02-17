import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RepoFetchService from './Services/RepoFetchService'


//display user repositories
const RepositoryList = () => {
  const { username } = useParams();
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const reposData = await RepoFetchService(username, page);
        setRepositories(reposData); // Clear existing repositories when fetching for a new page
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleLoadPrevious = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (repositories.length === 0) {
    return <div>No repositories found for this user.</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Repositories</h2>
      {repositories.map(repo => (
        <div key={repo.id} className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{repo.name}</h3>
          <p className="mt-2 text-gray-600">{repo.description}</p>
          {repo.topics && repo.topics.length > 0 && (
            <div className="mt-2">
              <span className="font-bold">Topics:</span>{' '}
              {repo.topics.map(topic => (
                <span key={topic} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700 mr-2">
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="mt-4 flex justify-between">
        <button onClick={handleLoadPrevious} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleLoadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Load More
        </button>
      </div>
    </div>
  );
}

export default RepositoryList
