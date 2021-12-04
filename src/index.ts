import { loadConfig } from '~UTILS/config.util'

async function main() {
  try {
    await loadConfig()
  } catch (error) {
    console.error((error as Error).message)
  }
}

main()
