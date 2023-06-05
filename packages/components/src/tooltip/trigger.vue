<script lang="ts">
import { cloneVNode, defineComponent, withDirectives } from 'vue'
import type { PropType } from 'vue'
import { findFirstLegitChild } from './helper'
export default defineComponent({
  name: 'LTrigger',
  props: {
    setTriggerRef: {
      type: Function as PropType<(val: HTMLElement | null) => void>,
      required: true,
    },
  },
  setup(props, { slots, attrs }) {
    const { setTriggerRef } = props

    const defaultSlots = slots.default?.(attrs)
    if (!defaultSlots)
      return null

    if (defaultSlots.length > 1)
      throw new Error('LTrigger requires exact only one valid child.')

    const firstLegit = findFirstLegitChild(defaultSlots)
    return () => {
      return withDirectives(cloneVNode(firstLegit, attrs), [
        [
          {
            mounted(el) {
              setTriggerRef(el)
            },
            updated(el) {
              setTriggerRef(el)
            },
            unmounted(el) {
              setTriggerRef(null)
            },
          },
        ],
      ])
    }
  },
})
</script>
