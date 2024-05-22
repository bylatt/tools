import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'
import './index.css'
import B64Decode from './pages/B64Decode'
import B64Encode from './pages/B64Encode'
import Home from './pages/Home'
import JSONEditor from './pages/JSONEditor'

const rootRoute = createRootRoute({
  component: () => <Layout />,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
})

const b64EncodeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/base64-encode',
  component: () => <B64Encode />,
})

const b64DecodeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/base64-decode',
  component: () => <B64Decode />,
})

const jsonEditorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/json-editor',
  component: () => <JSONEditor />,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  b64EncodeRoute,
  b64DecodeRoute,
  jsonEditorRoute,
])

const router = createRouter({ routeTree, defaultPreload: 'intent' })

const container = document.getElementById('app')
if (container !== null) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
