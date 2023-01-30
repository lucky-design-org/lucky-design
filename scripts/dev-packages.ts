import { logger, run } from './utils'

async function devPackages() {
  try {
    await run('pnpm run', ['--filter', './packages/*', '--parallel', 'dev'])
    logger.success('All packages are running in dev mode.')
  }
  catch (err) {
    logger.error((err as Error).toString())
  }
}

devPackages()
