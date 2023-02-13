import type { ExtractPropTypes } from 'vue'

// enum IconClassNames {}

export const iconProps = {
  className: {
    type: String,
    required: true,
  },
}

export type LIconProps = ExtractPropTypes<typeof iconProps>
