import { usePostsContext } from "../context/PostContext"

const PostCard = () => {

  return (
    <div className="card">
      <img className="img-fluid" src="" alt="" />
      <div className="card-body">
        <h5 className="card-text"></h5>
        <p className="card-text"></p>
        <h6>Tag:</h6>
        <p className="card-text"></p>
      </div>
    </div>
  )
}

export default PostCard