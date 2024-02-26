export function validateJSON(json: string): { error?: string } {
  try {
    JSON.parse(json)
  } catch (err) {
    return { error: err.message }
  }
  return {}
}

export function beautifyJSON(json: string): { error?: string; value?: string } {
  try {
    const res = JSON.stringify(JSON.parse(json), null, 2)
    return { value: res }
  } catch (err) {
    return { error: err.message }
  }
}

export function minifyJSON(json: string): { error?: string; value?: string } {
  try {
    const res = JSON.stringify(JSON.parse(json))
    return { value: res }
  } catch (err) {
    return { error: err.message }
  }
}
