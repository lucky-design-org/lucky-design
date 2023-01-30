import type { ExtractPropTypes, PropType } from 'vue'

export const buttonProps = {
  type: String as PropType<'primary'>,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
