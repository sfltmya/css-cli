import { devConfig, stagingConfig } from '../config/config'

export function showConfig() {
  console.log('css dev:', devConfig)
  console.log('css staging:', stagingConfig)
}
