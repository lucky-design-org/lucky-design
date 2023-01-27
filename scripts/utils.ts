import type { Options } from 'execa'
import { execa } from 'execa'
import pc from 'picocolors'

export async function run(bin: string, args: string[], opts: Options = {}) {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

export const logger = {
  success(msg: string) {
    // eslint-disable-next-line no-console
    console.log(pc.green(msg))
  },
  error(msg: string) {
    // eslint-disable-next-line no-console
    console.log(pc.bgRed(msg))
  },
}
