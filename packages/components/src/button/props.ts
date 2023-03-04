import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType, StatusType } from '@lucky-design/common'

export const buttonProps = {
  /**
   * @description: Button type
   */
  type: {
    type: String as PropType<StatusType | 'primary'>,
    default: 'primary',
  },
  plain: {
    type: Boolean as PropType<Boolean | false>,
    default: false,
  },
  /**
   * @description: Button text
   */
  text: String,

  /**
   * @description: Button shape
   */
  shape: {
    type: String as PropType<'round' | 'circle' | 'square'>,
    default: 'square',
  },

  /**
   * @description: Button disabled
   */
  disabled: {
    type: Boolean as PropType<Boolean | false>,
    default: false,
  },

  /**
   * @description: Button size
   */
  size: {
    type: String as PropType<SizeType | 'md'>,
    default: 'md',
  },
}

export type LButtonProps = ExtractPropTypes<typeof buttonProps>
