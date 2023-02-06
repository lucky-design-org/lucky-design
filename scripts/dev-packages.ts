import path from 'node:path'
import * as process from 'process'
import chokidar from 'chokidar'
import { debounce } from 'perfect-debounce'
import { isMac, logger, run } from './utils'

async function rebuildLuckyDesign() {
  const luckyDesign = path.resolve(process.cwd(), 'packages/components')
  const watcher = chokidar.watch(luckyDesign, {
    ignored: [/(^|[\/\\])\../, '**/node_modules/**', '**/dist/**'],
    persistent: true,
  })

  const build = async () => {
    if (isMac)
      await run('pnpm', ['--filter', './packages/lucky-design', 'build'])
    else
      await run('pnpm run', ['--filter', './packages/lucky-design', 'build'])
  }

  const debounceBuilder = debounce(async () => build(), 500)

  watcher.on('all', async () => {
    await debounceBuilder()
  })
}

async function devPackages() {
  try {
    if (isMac)
      await run('pnpm', ['--filter', './packages/*', '--parallel', 'dev'])
    else
      await run('pnpm run', ['--filter', './packages/*', '--parallel', 'dev'])

    await rebuildLuckyDesign()
    logger.success('All packages are running in dev mode.')
  }
  catch (err) {
    logger.error((err as Error).toString())
    process.exit()
  }
}

devPackages()
