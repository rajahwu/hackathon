import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { rootLoader, contactLoader } from './loaders'
import { createAction, editAction, deleteAction, updateAction } from './actions'
import Root from './routes/root'
import Contact from './routes/contact'
import EditContact from './routes/edit'
import ErrorPage from './error-page'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={rootLoader}
      action={createAction}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={updateAction}
        />

        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/delete"
          action={deleteAction}
        />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
