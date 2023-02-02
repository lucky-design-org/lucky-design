import { withInstallFunction } from '@lucky-design/common'
import { createMessage } from './manager'
import type { LMessageProps } from './props'
import './style.scss'

const LMessage = withInstallFunction((props: LMessageProps) => {
  const instance = createMessage(props)
  return instance.close
}, '$message')

export * from './props'
export default LMessage
export { LMessage }
