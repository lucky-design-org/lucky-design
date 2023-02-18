import type { ExtractPropTypes } from 'vue'

// import type { DirectionType } from '@lucky-design/common'common

export const tableProps = {
  /**
   * @description: table data
   */
  data: {
    type: Array as () => any[],
    default: () => [],
  },
  /**
   * @description: table columns
   */
  columns: {
    type: Array as () => any[],
    default: () => [],
  },
  /**
   * @description: table cells' content sortkey
   */
  sortKey: {
    type: String,
    default: '',
  },
  /**
   * @description: sort orders about table cells' content
   */
  // sortOrders: {
  //   type: Object as PropOptions<Record<string, number>>,
  //   default: () => ({}),
  // },

  /**
   * @description: Whether to fit the browser windows
   */
  fit: {
    type: Boolean,
    default: true,
  },
}

export type LTableProps = ExtractPropTypes<typeof tableProps>
