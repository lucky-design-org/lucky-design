import { isMac, logger, run } from './utils'

async function build() {
  try {
    if (isMac)
      await run('pnpm', ['--filter', './packages/*', '--parallel', 'build'])
    else
      await run('pnpm run', ['--filter', './packages/*', '--parallel', 'build'])

    logger.success('All builds completed successfully')
  }
  catch (err) {
    logger.error((err as Error).toString())
  }
}

build()
