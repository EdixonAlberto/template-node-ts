import { loadConfig } from '@UTILS'
import { ServerService } from '@SERVICES/Server.service'

async function main() {
  try {
    await loadConfig()
    const server = new ServerService()

    server.start()
  } catch (error) {
    console.error((error as Error).message)
  }
}

main()
