import { withInstall } from '@lucky-design/common'
import Checkbox from './checkbox.vue'

import './style.scss'

export const LCheckbox = withInstall(Checkbox, 'LCheckbox')

export default LCheckbox

export * from './props'
