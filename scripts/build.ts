import { logger, run } from './utils'

async function build() {
  try {
    switch (process.platform) {
      case 'darwin':
        // console.log('[ mac ] >')
        await run('pnpm', ['--filter', './packages/*', '--parallel', 'build'])
        break
      case 'win32':
        // console.log('[ windows ] >')
        await run('pnpm run', [
          '--filter',
          './packages/*',
          '--parallel',
          'build',
        ])
        break
      default:
        break
    }

    logger.success('All builds completed successfully')
  } catch (err) {
    logger.error((err as Error).toString())
  }
}

build()
