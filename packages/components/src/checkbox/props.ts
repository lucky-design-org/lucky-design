import type { ExtractPropTypes } from 'vue'

export const checkboxProps = {
  value: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  trueValue: {
    type: [String, Number, Boolean],
    default: true,
  },
  falseValue: {
    type: [String, Number, Boolean],
    default: false,
  },
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
