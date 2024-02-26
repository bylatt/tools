import {
  useCopyToClipboard,
  useDocumentTitle,
  useLocalStorage,
} from '@uidotdev/usehooks'
import React from 'react'
import { toB64 } from '../utils/base64'
import { cn } from '../utils/cn'

export default function B64Encode() {
  useDocumentTitle('Base64 Encode | Tools')
  const [input, setInput] = useLocalStorage('b64-encode-input', '')
  const [output, setOutput] = useLocalStorage('b64-encode-output', '')
  const [_, copyToClipboard] = useCopyToClipboard()

  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault()
    setInput(e.target.value)
  }

  function onEncode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setOutput(toB64(input))
  }

  function onCopy(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    copyToClipboard(output)
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
        onChange={onInputChange}
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
