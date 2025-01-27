

const PostCard = ({ post }) => {

  return (
    <div className="card">
      <img className="img-fluid" src={post.image} alt={post.title} />
      <div className="card-body">
        <h5 className="card-text">
          {post.title}
        </h5>
        <p className="card-text">
          {post.content}
        </p>
      </div>
    </div>
  )
}

export default PostCard