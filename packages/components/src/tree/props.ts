import type { ExtractPropTypes } from 'vue'

export const treeNodeProps = {
  data: {
    type: Object,
    default() {
      return {}
    },
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
}

export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>
