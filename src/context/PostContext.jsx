import { createContext, useState, useContext } from "react"
import axios from "axios"

const PostsContext = createContext()

const PostsProvider = ({ children }) => {

  const [posts, setPosts] = useState([])
  const postApiUrl = 'http://localhost:3001'

  const fetchPosts = () => {
    axios.get(`${postApiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
        console.log(res.data);

      })
  }

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

const usePostsContext = () => {
  return useContext(PostsContext)
}

export { usePostsContext, PostsProvider }