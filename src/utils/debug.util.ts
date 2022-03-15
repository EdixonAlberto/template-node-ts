import { getConfig } from '@UTILS'

function prepareTitle(title: string): string {
  const sizeTitle = 9
  let titlePrepared = title

  if (title.length > sizeTitle) {
    throw new Error(`The size of the title of the debug message must be less than ${sizeTitle + 1}`)
  } else {
    const count = sizeTitle - title.length

    for (let i = 0; i < count; i++) {
      titlePrepared += ' '
    }
  }

  return titlePrepared
}

export function apiDebug(title: string, message: string, payload?: object | Array<object>): void {
  if (getConfig().debug) {
    const dateISO = new Date().toISOString().split('T')[1] as string
    const hour = dateISO.split('.')[0]

    console.log(`[${hour}] | ${prepareTitle(title)} | ${message}`)
    if (payload) console.table(payload)
  }
}

export function apiLogger(title: string, message: string): void {
  console.log(`${title}: `, message)
}
