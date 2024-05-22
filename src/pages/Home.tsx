import { Link } from '@tanstack/react-router'
import { useDocumentTitle } from '@uidotdev/usehooks'
import React from 'react'

export default function Home() {
  useDocumentTitle('Tools')

  return (
    <div className="py-2">
      <ul className="list-disc list-inside">
        <li>
          <Link to="/base64-encode">Base64 Encode</Link>
        </li>
        <li>
          <Link to="/base64-decode">Base64 Decode</Link>
        </li>
        <li>
          <Link to="/json-editor">JSON Editor</Link>
        </li>
      </ul>
    </div>
  )
}
