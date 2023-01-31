import type { ExtractPropTypes, PropType } from 'vue'

export const buttonProps = {
  type: String as PropType<'primary'>,
  text: String,
  disabled: Boolean,
  size: String,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
