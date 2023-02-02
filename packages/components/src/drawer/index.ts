import { withInstall } from '@lucky-design/common'
import Drawer from './drawer.vue'
import './style.scss'

export const LDrawer = withInstall(Drawer, 'LDrawer')

export default LDrawer

export * from './props'
