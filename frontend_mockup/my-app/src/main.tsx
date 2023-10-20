import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Menu from './pages/menu/index.tsx'
import View from './components/menu/view/index.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}
    >
      <Route
        path='/menu'
        element={<Menu />}
      >
        <Route
          path='combos'
          element={<View />}
        />
        <Route
          path='supah-shakes'
          element={<View />}
        />
        <Route
          path='for-you'
          element={<View />}
        />
        <Route
          path='stays-active'
          element={<View />}
        />
        <Route
          path='goodies'
          element={<View />}
        />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
