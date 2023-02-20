import type { ExtractPropTypes, PropType } from 'vue'
import type { Placement } from './types'

export const toolTipProps = {
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  content: String,
  appendTo: String,
  visible: Boolean,
}

export type LToolTipProps = ExtractPropTypes<typeof toolTipProps>
