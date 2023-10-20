import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import Index from './routes'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import { loader as rootLoader } from './loaders/root-loader'
import { loader as contactLoader } from './loaders/contact-loader'
import { action as createAction } from './actions/contact/create'
import { action as editAction } from './actions/contact/edit'
import { action as deleteAction } from './actions/contact/delete'
import { action as updateAction } from './actions/contact/update'
import EditContact from './routes/edit'

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
