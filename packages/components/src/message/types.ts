import type { ComponentInternalInstance, VNode } from 'vue'

export interface MessageInstance {
  id: string
  vnode: VNode
  component: ComponentInternalInstance
  props: any
  close: Function
}
