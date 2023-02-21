import type { ExtractPropTypes } from 'vue'

// import type { DirectionType } from '@lucky-design/common'common

interface TableColumn {
  label: string
  prop: string
}
interface TableRow {
  id: number
  [key: string]: string | number
}
interface Sort {
  column: String
  order: 'asc' | 'desc'
}
export type {
  TableColumn,
  TableRow,
  Sort,
}
export const tableProps = {
  /**
   * @description: table columns
   */
  columns: {
    type: Array as () => TableColumn[],
    required: true,
  },
  /**
   * @description: table rows
   */
  rows: {
    type: Array as () => TableRow[],
    required: true,
  },
  /**
   * @description: sort orders about table cells' content
   */
  striped: {
    type: Boolean,
    default: false,
  },
  defaultSort: {
    // type: Object as PropType<() => Sort | null>,
    // default: { column: 'id', order: 'asc' },
    type: String,
    default: 'asc',
  },
  tableClass: {
    type: String,
    default: '',
  },

  /**
   * @description: Whether to visible the browser windows
   */
  visible: {
    type: Boolean,
    default: true,
  },
}
// export const data = {TableColumn, TableRow}
export type LTableProps = ExtractPropTypes<typeof tableProps>
