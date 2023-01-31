import * as process from 'process'
import { logger, run } from './utils'

async function dev() {
  try {
    run('vue-tsc', [
      '--declaration',
      '--emitDeclarationOnly',
      '--skipLibCheck',
      '--watch',
    ])
    run('vite', ['build', '--watch'])
    logger.success(`${process.cwd()}: are running in dev mode.`)
  }
  catch (err) {
    logger.error((err as Error).toString())
  }
}

dev()
