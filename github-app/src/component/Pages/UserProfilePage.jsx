import React from 'react'
import { useParams } from 'react-router-dom'
import UserProfile from "../UserProfile"
import RepositoryList from "../RepositoryList"

// Nav => Github Page
const UserProfilePage = () => {
    const { username } = useParams();
  return (
    <div className="container mx-auto px-4 py-8">
      <UserProfile username={username} />
      <RepositoryList username={username} />
    </div>
  )
}

export default UserProfilePage