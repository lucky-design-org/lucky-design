import type { ExtractPropTypes, PropType } from 'vue'
import type { DirectionType } from '@lucky-design/common'

export const drawerProps = {
  /**
   * @description: drawer title
   */
  title: String,
  /**
   * @description: drawer appearance direction
   */
  direction: {
    type: String as PropType<DirectionType | 'right'>,
    default: 'right',
  },
  /**
   * @description: Whether to show the mask
   */
  visible: {
    type: Boolean,
    default: false,
  },
  /**
   * @description: close the drawer
   */
  close: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
  /**
   * @description: drawer background color
   * @default: white
   */
  bgColor: {
    type: String,
    default: 'white',
  },
}

export type LDrawerProps = ExtractPropTypes<typeof drawerProps>
