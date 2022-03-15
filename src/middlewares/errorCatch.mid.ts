import { Request, Response, NextFunction } from 'express'

export function errorCatch(error: Error, req: Request, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    console.error('ERROR-HANDLING-EXPRESS:', error)
    // Error handling is delegated to Express
    return next(error)
  } else {
    // Mostrar error en consola si sucede un error 500
    if (req.statusCode === 500) console.error('ERROR-SERVER:', error)
  }

  // Error handling personalized
  res.status(req.statusCode || 500).json({
    error: {
      type: error.name,
      message: error.message
    }
  })
}
