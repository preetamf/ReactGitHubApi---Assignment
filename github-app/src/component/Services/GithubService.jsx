import React from 'react'
//fetching user profile service
const GetUserProfile = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        throw new Error (`change username in url: ${username}`)
    }
    const userData = await response.json();
    return userData;
  } 
  catch (error) {
    throw new Error(`Error fetching user profile: ${error.message}`);
  }
}

export default GetUserProfile