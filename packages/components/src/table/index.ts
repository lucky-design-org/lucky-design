import { withInstall } from '@lucky-design/common'
import Table from './table.vue'
import './style.scss'

export const LTable = withInstall(Table, 'LTable')

export default LTable

export * from './props'
