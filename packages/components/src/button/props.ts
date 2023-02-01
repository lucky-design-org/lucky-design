import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType, StatusType } from '@lucky-design/common'

export const buttonProps = {
  type: {
    type: String as PropType<StatusType | 'default'>,
    default: 'default',
  },
  text: String,
  disabled: Boolean,
  size: {
    type: String as PropType<SizeType | 'md'>,
    default: 'md',
  },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
