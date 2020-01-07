import * as jwt from 'jsonwebtoken'

export function encode(
  id: string,
  secret: string,
  options?: {
    cName?: string
    expiresIn?: number
  }
) {
  const { cName = 'clientId', expiresIn = 3600 * 24 } = options || {}
  const payload: any = {}
  payload[cName] = id
  return jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn,
  })
}
