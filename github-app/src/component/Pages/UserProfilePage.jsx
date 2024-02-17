import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import UserProfile from "../UserProfile"
import RepositoryList from "../RepositoryList"

const UserProfilePage = () => {
    const { username } = useParams();
    // const data = useLoaderData();
  return (
    <div className="container mx-auto px-4 py-8">
      <UserProfile username={username} />
      <RepositoryList username={username} />
    </div>
  )
}

export default UserProfilePage