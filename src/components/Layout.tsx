import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import React from 'react'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className="w-[100%] max-w-[1280px] flex flex-col justify-center mx-auto">
      <Nav />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
}
