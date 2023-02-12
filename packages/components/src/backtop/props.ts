import type { ExtractPropTypes } from 'vue'

export const BacktopProps = {
  bottom: {
    type: Number,
    default: 50,
  },
  right: {
    type: Number,
    default: 50,
  },
  visibilityHeight: {
    type: Number,
    default: 400,
  },
}

export type LBacktopProps = ExtractPropTypes<typeof BacktopProps>
