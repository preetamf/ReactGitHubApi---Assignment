import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetUserProfile from './Services/GithubService';

//display user profile
const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const userData = await GetUserProfile(username);
        // console.log(`userProfile: ${userData}`)
        setUser(userData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center">
        <img src={user.avatar_url} alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">@{user.login}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-800">{user.bio}</p>
      <div className="mt-4">
        <p className="text-gray-700">Public Repositories: {user.public_repos}</p>
      </div>
    </div>
  );
};

export default UserProfile;
