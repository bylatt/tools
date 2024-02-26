import React, { useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import { toB64 } from '../utils/base64'
import { cn } from '../utils/cn'

export default function B64Encode() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copyState, copyToClipboard] = useCopyToClipboard()

  function onEncode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setOutput(toB64(input))
  }

  function onCopy(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    copyToClipboard(output)
    if (copyState.error) {
      return
    }
  }

  return (
    <div className="py-4 flex flex-col items-center">
      <h1 className="text-2xl w-[100%] text-center text-gray-100 font-bold">
        Base64 Encode
      </h1>
      <textarea
        className="w-[100%] bg-black text-white p-2 my-4 font-mono placeholder:text-gray-400 border-2 border-dashed border-gray-400"
        rows={10}
        placeholder="Paste your text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-gray-300 p-2 font-semibold text-gray-800 w-36 hover:bg-gray-400"
        onClick={onEncode}
        type="button"
      >
        Encode
      </button>
      <div
        className={cn(
          'w-[100%] text-white p-2 my-4 font-mono h-40 border-2 border-dashed border-gray-400',
          {
            hidden: !output,
          },
        )}
      >
        {output}
      </div>
      <button
        className={cn(
          'bg-gray-300 p-2 font-semibold text-gray-800 w-48 hover:bg-gray-400',
          {
            hidden: !output,
          },
        )}
        type="button"
        onClick={onCopy}
      >
        Copy to clipboard
      </button>
    </div>
  )
}
