import PostCard from "./PostCard"
import { usePostsContext } from "../context/PostContext"
import { useEffect } from "react"

const PostList = () => {

  const { posts, fetchPosts } = usePostsContext()

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      {posts.map(post => (
        <PostCard />
      ))}
    </>
  )
}

export default PostList