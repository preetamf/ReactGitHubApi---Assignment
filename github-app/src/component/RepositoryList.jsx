import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RepoFetchService from './Services/RepoFetchService'

const RepositoryList = () => {
  const { username } = useParams()
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect( () => {
    const fetchRepositories = async () => {
      try {
        setLoading(true)
        const reposData = await RepoFetchService(username)
        setRepositories(reposData)
        setLoading(false)
      }
      catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchRepositories();
  }, [username]);

  if (error) {
    return <div>Error: {error}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (repositories.length === 0) {
    return <div>No repositories found for this user</div>
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Repositories</h2>
      {repositories.map(repo => (
        <div key={repo.id} className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{repo.name}</h3>
          <p className="mt-2 text-gray-600">{repo.description}</p>
          {repo.topics && (
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
    </div>
  )
}

export default RepositoryList
