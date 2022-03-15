import { Request, NextFunction } from 'express'
import { apiDebug } from '@UTILS'

export function requestDebug(req: Request, _, next: NextFunction): void {
  apiDebug('HTTP-IN', `${req.method} ${req.originalUrl}`)

  next()
}
