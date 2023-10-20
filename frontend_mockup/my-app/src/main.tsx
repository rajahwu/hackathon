import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Menu from './pages/menu/index.tsx'
import View from './components/menu/view/index.tsx'
import { loader as menuItemLoader } from './data/loaders/menuItemLoader.ts'


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
          loader={menuItemLoader}
          />
        <Route
          path='supah-shakes'
          element={<View />}
          loader={menuItemLoader}
          />
        <Route
          path='for-you'
          element={<View />}
          loader={menuItemLoader}
          />
        <Route
          path='stays-active'
          element={<View />}
          loader={menuItemLoader}
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
