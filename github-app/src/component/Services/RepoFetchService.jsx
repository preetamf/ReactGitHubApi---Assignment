import React from 'react'

const RepoFetchService = async (username, page = 1, perPage = 10) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch repositories, check: ${username}`);
        }
        const repositoriesData = await response.json();
        return repositoriesData;
      } catch (error) {
        throw new Error(`Error fetching repositories: ${error.message}`);
      }
}

export default RepoFetchService