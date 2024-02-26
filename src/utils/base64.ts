export function toB64(input: string): string {
  return Buffer.from(input).toString('base64')
}

export function fromB64(input: string): string {
  return Buffer.from(input, 'base64').toString('utf-8')
}
