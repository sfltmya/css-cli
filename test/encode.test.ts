import { encode } from '../src/index'

describe('encode', () => {
  it('encode success', () => {
    const clientID = '123456789'
    const secret = '123'
    const token: string = encode(clientID, secret)
    expect(token).toBeDefined()
  })
})
