import { Fragment, Text, h } from 'vue'
import type { VNode } from 'vue'

export const findFirstLegitChild = (node: VNode[]) => {
  for (const child of node) {
    switch (child.type) {
      case Comment:
        continue

      case Text:
      case 'svg':
        return h('span', null, child)

      case Fragment:
        return findFirstLegitChild(child.children as VNode[])

      default:
        return child
    }
  }
}
