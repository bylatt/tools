import * as uuid from 'uuid'

export function GenUUID(version: string): string {
  switch (version) {
    case 'v1':
      return uuid.v1()
    case 'v3':
      return uuid.v3('https://tools.bylatt.co', uuid.v3.URL)
    case 'v4':
      return uuid.v4()
    case 'v5':
      return uuid.v5('https://tools.bylatt.co', uuid.v5.URL)
    case 'v6':
      return uuid.v6()
    case 'v7':
      return uuid.v7()
    default:
      return 'Unsupported version'
  }
}
