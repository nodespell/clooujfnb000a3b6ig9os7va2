import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <div>
  <Routes>
    <Route
      element={<div><React.Fragment key=".0">zhiqi.art<React.Fragment key=".1"><div><Link to="/">Home</Link></div><div><Link to="/about">About</Link></div></React.Fragment><Outlet /></React.Fragment></div>}
      path=""
    >
      <Route
        element={<>HOME</>}
        path="/"
      />
      <Route
        element={<>ABOUT</>}
        path="/about"
      />
    </Route>
  </Routes>
</div>
}

export default function App() {
  return <RouterProvider router={router} />
}