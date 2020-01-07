#!/usr/bin/env node

import * as commander from 'commander'
import { encode, decode, showConfig } from '../src/index'
const pg = require('../../package.json')

const program = new commander.Command()
program.version(pg.version)

program.option('-c, --config', 'show css config', () => {
  showConfig()
})
program.command('decode <token> <secret>').action(async (token, secret) => {
  const decoded = await decode(token, secret)
  console.log(decoded)
})

program.command('encode <id>, <secret>').action((id, secret) => {
  if (!id || !secret) return showConfig()
  const encoded = encode(id, secret)
  console.log(encoded)
})

program.command('wallet').action(() => {
  const encoded = encode(
    '4257e687-11eb-4957-a815-cb0dcdcfdeaf',
    '197816f91e03a9896763c556940463cf49245d5f05dc7f3b0ee51f87ecbeea54',
    {
      cName: 'serviceId',
      expiresIn: 30,
    }
  )
  console.log(encoded)
})

program
  .command('encode-s <id>, <secret>, <cName>, <expiresIn>')
  .action((id, secret, cName, expiresIn) => {
    if (!id || !secret) return showConfig()
    const encoded = encode(id, secret, {
      cName,
      expiresIn,
    })
    console.log(encoded)
  })

program.parse(process.argv)

program.help()
