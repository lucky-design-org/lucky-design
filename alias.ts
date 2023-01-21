import { resolve } from 'path'

export const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@lucky-design/components': r('./packages/components/'),
  '@lucky-design/common': r('./packages/common/'),
}
