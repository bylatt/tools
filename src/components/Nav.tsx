import { Link } from '@tanstack/react-router'
import React from 'react'

export default function Nav() {
  return (
    <nav className="my-2">
      <ul className="flex flex-row">
        {[
          ['Home', '/'],
          ['Base64 Encode', '/base64-encode'],
          ['Base64 Decode', '/base64-decode'],
          ['JSON Editor', '/json-editor'],
          ['UUID Generator', '/uuid'],
        ].map(([title, to]) => (
          <li className="py-2 mx-4 first:ml-0 last:mr-0" key={title}>
            <Link
              to={to}
              className="[&.active]:font-bold [&.active]:text-white"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
