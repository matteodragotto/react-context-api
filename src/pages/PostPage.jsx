import PostList from "../components/PostList"

const Postpage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <h1>I miei articoli</h1>
        <PostList />
      </div>
    </div>
  )
}

export default Postpage