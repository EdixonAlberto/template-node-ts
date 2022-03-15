import express from 'express'
import { apiLogger, getConfig } from '@UTILS'
import { requestDebug, errorCatch } from '@MIDDLEWARES'
import { mainRoutes } from '@ROUTES/main.routes'

export class ServerService {
  private readonly PORT_HTTP = getConfig().portHttp || 3000
  private app = express()

  constructor() {
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.app.use('*', requestDebug)
    this.app.use(express.json())
  }

  private routes(): void {
    this.app.use('/api', mainRoutes)
    this.app.use(errorCatch)
  }

  public start(): void {
    this.app.listen(this.PORT_HTTP, () => {
      apiLogger('API', `listening on http://localhost:${this.PORT_HTTP}`)
    })
  }
}
