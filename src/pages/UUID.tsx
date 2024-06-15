import { useSearch } from '@tanstack/react-router'
import { useCopyToClipboard, useDocumentTitle } from '@uidotdev/usehooks'
import React, { useState } from 'react'
import { cn } from '../utils/cn'
import { genUUID } from '../utils/uuid'

export default function B64Decode() {
  useDocumentTitle('UUID | Tools')
  const versionKey = 'uuid-version'
  const { v: versionFromQuery } = useSearch({ strict: false })
  const versionFromStorage = localStorage.getItem(versionKey)
  if (versionFromQuery) {
    localStorage.setItem(versionKey, `v${versionFromQuery}`)
  }
  const [version, setVersion] = useState(
    versionFromQuery ? `v${versionFromQuery}` : versionFromStorage || 'v4'
  )
  const [output, setOutput] = useState('')
  const [_, copyToClipboard] = useCopyToClipboard()

  function onCopy(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    copyToClipboard(output)
  }

  function onVersionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    localStorage.setItem(versionKey, e.target.value)
    setVersion(e.target.value)
  }

  function onGenUUID(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    const uuid = genUUID(version)
    setOutput(uuid)
  }

  const versions = ['v1', 'v3', 'v4', 'v5', 'v6', 'v7']

  return (
    <div className="py-4 flex flex-col items-center">
      <h1 className="text-2xl w-[100%] text-center text-gray-100 font-bold">
        UUID Generator
      </h1>
      <select
        name="Generate UUID"
        className="w-1/6 text-white p-2 my-4 font-mono border-2 border-dashed border-gray-400 bg-transparent appearance-none block"
        onChange={onVersionChange}
        value={version}
      >
        {versions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        className="bg-gray-300 p-2 font-semibold text-gray-800 hover:bg-gray-400"
        type="button"
        onClick={onGenUUID}
      >
        Generate
      </button>
      <div
        className={cn(
          'w-[100%] text-white p-2 my-4 font-mono min-h-10 border-2 border-dashed border-gray-400',
          {
            hidden: !output,
          }
        )}
      >
        {output}
      </div>
      <button
        className={cn(
          'bg-gray-300 p-2 font-semibold text-gray-800 hover:bg-gray-400',
          {
            hidden: !output,
          }
        )}
        type="button"
        onClick={onCopy}
      >
        Copy to clipboard
      </button>
    </div>
  )
}
