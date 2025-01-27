

const PostCard = ({ post }) => {

  return (
    <div className="col-4 p-3">
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
    </div>

  )
}

export default PostCard