import type { ExtractPropTypes, PropType } from 'vue'

export const treeNodeProps = {}

export const treeItemProps = {
  items: {
    type: Object as PropType<any>,
    default: () => {},
  },
  dataKey: Object as PropType<string | number>,
  index: Number,
  icon: {
    type: String,
    default: 'icon-arrow-right-filling',
  },
  defaultOpenNodes: {
    type: Array,
    default: () => [],
  },
  options: {
    type: Object,
    default: () => {
      return {}
    },
  },
  tabIndexs: Object as PropType<string | number>,
  multiple: Boolean,
  defaultSelectNodes: {
    type: Array,
    default: () => [],
  },
  children: {
    type: Array as PropType<any>,
  },
}
export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>
