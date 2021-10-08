import { loadConfig } from '~UTILS/loadConfig';

async function main() {
  try {
    await loadConfig();
  } catch (error) {
    console.error('>>ERROR:', (error as Error).message);
  }
}

main();
