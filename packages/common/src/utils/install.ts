import type { Component } from 'vue'
import type { SFCWithInstall } from '../types'

export const withInstall = <T extends Component = Component>(
  component: T,
  name?: string,
) => {
  (component as SFCWithInstall<T>).install = (app): void => {
    if (!name)
      app.component(`L${component.name}`, component)
    else
      app.component(name, component)
  }

  return component as SFCWithInstall<T>
}
