import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import List from "./pages/List"
import Single from "./pages/Single"
import New from "./pages/New"
import { productInputs, userInputs } from './formSource'
import "./styles/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";

const App = () => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Route >
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App