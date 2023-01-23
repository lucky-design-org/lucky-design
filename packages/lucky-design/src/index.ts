import type { App, Plugin } from 'vue'
import { plugins } from './components'

export * from './components'

export const INSTALLED_KEY = Symbol('LuckyDesign_Installed')

function createInstaller(components: Plugin[]) {
  const install = (app: App, options = {}) => {
    if (app[INSTALLED_KEY])
      return

    app[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))

    if (options)
      app.provide(INSTALLED_KEY, options)
  }

  return {
    install,
  }
}

export * from '@lucky-design/components'

export default createInstaller(plugins)
