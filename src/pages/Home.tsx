import { Link } from '@tanstack/react-router'
import React from 'react'

export default function Home() {
  return (
    <div className="py-2">
      <ul className="list-disc list-inside">
        <li>
          <Link to="/base64-encode">Base64 Encode</Link>
        </li>
        <li>
          <Link to="/base64-decode">Base64 Decode</Link>
        </li>
      </ul>
    </div>
  )
}
