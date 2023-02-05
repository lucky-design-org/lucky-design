import type { ComponentInternalInstance, VNode } from 'vue'
import type { closeAll, createMessage, createSubHandler } from './manager'

export interface MessageInstance {
  id: string
  vnode: VNode
  component: ComponentInternalInstance
  props: any
  close: Function
}

export const messageTypes = ['info', 'success', 'warning', 'error'] as const

export type MessageType = (typeof messageTypes)[number]

export type Message = typeof createMessage & Record<MessageType, ReturnType<typeof createSubHandler>> & { closeAll: typeof closeAll }
