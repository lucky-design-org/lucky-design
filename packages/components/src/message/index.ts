import { withInstallFunction } from '@lucky-design/common'
import { closeAll, createMessage, createSubHandler } from './manager'
import type { Message } from './types'
import { messageTypes } from './types'
import './style.scss'

const message = createMessage as Message

for (const type of messageTypes)
  message[type] = createSubHandler(type)

message.closeAll = closeAll
const LMessage = withInstallFunction(message, '$message')

export * from './props'
export default LMessage
export { LMessage }
