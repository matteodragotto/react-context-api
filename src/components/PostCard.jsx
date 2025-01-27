import React from 'react'

const PostCard = () => {
  return (
    <div className="card">
      <img className="img-fluid" src={post?.image} alt={post?.title} />
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