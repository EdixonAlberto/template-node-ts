import { apiLogger } from '@UTILS'

export async function loadConfig(): Promise<void> {
  const { resolve } = await import('path')
  const { config } = await import('dotenv')

  const NODE_ENV = process.env.NODE_ENV as TEnv
  const result = config({ path: resolve('env', `${NODE_ENV}.env`) })

  if (result.error) throw new Error(`ERROR-ENV: ${result.error.message}`)
  else apiLogger('ENV', `environment "${NODE_ENV}" loaded successfully`)
}

export const getConfig = (): TConfig => {
  const ENV: NodeJS.ProcessEnv = process.env

  return {
    portHttp: Number(ENV.PORT_HTTP) || 3000,
    debug: ENV.DEBUG === 'true'
  }
}
