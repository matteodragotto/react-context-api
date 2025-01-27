import { BrowserRouter, Routes, Route } from "react-router-dom"


import { PostsProvider } from "./context/PostContext"
import DefaultLayout from "./layouts/DefaultLayout"
import Postpage from "./pages/Postpage"

const App = () => {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Postpage} />
          </Route>
        </Routes>

      </BrowserRouter>
    </PostsProvider>
  )
}

export default App