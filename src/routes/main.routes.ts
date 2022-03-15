import { Router, Response } from 'express'
import fs from 'fs'
import { resolve } from 'path'

const router = Router()

router.get('/', (_, res: Response): void => {
  const pkg = JSON.parse(fs.readFileSync(resolve('package.json'), 'utf8'))

  res.status(200).json({
    status: 'OK',
    version: pkg.version,
    name: pkg.name,
    description: pkg.description,
    date: new Date().toISOString()
  })
})

export { router as mainRoutes }
