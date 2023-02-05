export interface LMessageProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  message: string
  timeout?: number
  offset?: number
  closeBtn?: boolean
}
