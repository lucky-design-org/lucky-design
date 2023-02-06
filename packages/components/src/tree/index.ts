import { withInstall } from '@lucky-design/common'
import Tree from './tree.vue'
import './style.scss'

export const LTree = withInstall(Tree, 'LTree')

export default LTree

export * from './props'
