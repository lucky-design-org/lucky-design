import { withInstall } from '@lucky-design/common'
import Backtop from './backtop.vue'
import './style.scss'

export const LBacktop = withInstall(Backtop, 'LBacktop')

export default LBacktop

export * from './props'
