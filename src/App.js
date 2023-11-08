import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <div>
  <Routes>
    <Route
      element={<>HOME<React.Fragment key=".1"><div><Link to="/">Home</Link></div><div><Link to="/about">About</Link></div></React.Fragment></>}
      path="/"
    />
    <Route
      element={<>ABOUT<React.Fragment key=".1"><div><Link to="/">Home</Link></div><div><Link to="/about">About</Link></div></React.Fragment></>}
      path="/about"
    />
  </Routes>
</div>
}

export default function App() {
  return <RouterProvider router={router} />
}