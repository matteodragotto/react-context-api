import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import Postpage from "./pages/Postpage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Postpage} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App