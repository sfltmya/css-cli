import * as jwt from 'jsonwebtoken'

export async function decode(token: string, secret: string): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error: any, decoded: string) => {
      if (error) reject(error)
      return resolve(decoded)
    })
  })
}
