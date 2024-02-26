import { Link } from '@tanstack/react-router'
import React from 'react'
import { getRandomEmoji } from '../utils/emoji'

export default function Home() {
  return (
    <div className="py-2">
      <h1 className="text-8xl py-4">{getRandomEmoji()}</h1>
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
