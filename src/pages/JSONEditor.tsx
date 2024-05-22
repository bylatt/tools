import { json } from '@codemirror/lang-json'
import {
  useCopyToClipboard,
  useDocumentTitle,
  useLocalStorage,
} from '@uidotdev/usehooks'
import { githubDark } from '@uiw/codemirror-theme-github'
import ReactCodeMirror from '@uiw/react-codemirror'
import React, { useCallback, useState } from 'react'
import { beautifyJSON, minifyJSON, validateJSON } from '../utils/json'

export default function JSONEditor() {
  useDocumentTitle('JSON Editor | Tools')

  const [input, setInput] = useLocalStorage('json-editor-input', '')
  const [error, setError] = useState('')
  const [_, copyToClipboard] = useCopyToClipboard()

  const onChange = useCallback(
    (value: string, _) => {
      setInput(value)
      if (!value) {
        setError('')
        return
      }
      const { error } = validateJSON(value)
      if (error) {
        setError(error)
      } else {
        setError('')
      }
    },
    [setInput]
  )

  function onBeautify(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setInput((prev) => {
      const { value, error } = beautifyJSON(prev)
      if (error) {
        setError(error)
        return prev
      }
      if (value) {
        return value
      }
      return prev
    })
  }

  function onMinify(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setInput((prev) => {
      const { value, error } = minifyJSON(prev)
      if (error) {
        setError(error)
        return prev
      }
      if (value) {
        return value
      }
      return prev
    })
  }

  function onCopy(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    copyToClipboard(input)
  }

  return (
    <div className="py-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-100">JSON Editor</h1>
      <div className="pt-4 flex flex-row w-[100%]" role="group">
        <ul>
          <li className="inline-block p-1 first:border-l-2 first:border-t-2 first:border-b-2 first:border-r-0 first:rounded-tl-sm first:rounded-bl-sm first:rounded-tr-none first:rounded-br-none last:rounded-tr-sm last:rounded-br-sm last:border-r-2 border-t-2 border-b-2 border-l-2 rounded-tl-none rounded-bl-none border-dashed border-gray-400 w-24 text-center">
            <button type="button" onClick={onBeautify}>
              Beautify
            </button>
          </li>
          <li className="inline-block p-1 first:border-l-2 first:border-t-2 first:border-b-2 first:border-r-0 first:rounded-tl-sm first:rounded-bl-sm first:rounded-tr-none first:rounded-br-none last:rounded-tr-sm last:rounded-br-sm last:border-r-2 border-t-2 border-b-2 border-l-2 rounded-tl-none rounded-bl-none border-dashed border-gray-400 w-24 text-center">
            <button type="button" onClick={onMinify}>
              Minify
            </button>
          </li>
          <li className="inline-block p-1 first:border-l-2 first:border-t-2 first:border-b-2 first:border-r-0 first:rounded-tl-sm first:rounded-bl-sm first:rounded-tr-none first:rounded-br-none last:rounded-tr-sm last:rounded-br-sm last:border-r-2 border-t-2 border-b-2 border-l-2 rounded-tl-none rounded-bl-none border-dashed border-gray-400 w-24 text-center">
            <button type="button" onClick={onCopy}>
              Copy
            </button>
          </li>
        </ul>
      </div>
      <ReactCodeMirror
        className="border-gray-400 border-2 border-dashed w-[100%] my-4 rounded-sm font-mono"
        height="640px"
        lang="json"
        extensions={[json()]}
        theme={githubDark}
        value={input}
        onChange={onChange}
      />
      {error && (
        <span className="bg-red-500 text-md w-[100%] text-white p-2">
          !!! Error: {error}
        </span>
      )}
    </div>
  )
}
