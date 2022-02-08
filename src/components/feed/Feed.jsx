import React, { useState, useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get('/posts/profile/' + username)
        : await axios.get('/posts/timeline/61ff0e08a71109eb703bc660')
      setPosts(res.data)
    }
    fetchPosts()
  }, [username])
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => {
          const { _id } = p
          return <Post key={_id} post={p} />
        })}
      </div>
    </div>
  )
}

export default Feed
