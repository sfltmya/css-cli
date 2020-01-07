import { encode, decode } from '../src/index'

describe('decode', () => {
  it('decode success', async (): Promise<void> => {
    const clientID = '123456789'
    const secret = '123'
    const token: string = encode(clientID, secret)
    const decoded: any = await decode(token, secret)
    expect(decoded.clientId).toBe(clientID)
  })
})
