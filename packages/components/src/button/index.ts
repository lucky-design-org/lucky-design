import { withInstall } from '@lucky-design/common'
import Button from './button.vue'
import './style.scss'

export const LButton = withInstall(Button, 'LButton')

export default LButton

export * from './props'
