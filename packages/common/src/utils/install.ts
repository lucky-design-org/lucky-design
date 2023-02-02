import type { App, Component } from 'vue'
import type { SFCInstallWithContext, SFCWithInstall } from '../types'

export const withInstall = <T extends Component = Component>(
  component: T,
  name?: string,
) => {
  (component as SFCWithInstall<T>).install = (app): void => {
    if (!name)
      app.component(`L${component.name}`, component)
    else app.component(name, component)
  }

  return component as SFCWithInstall<T>
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}
