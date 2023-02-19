import { withInstallObj, withNoopInstall } from '@lucky-design/common'
import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'

import './style/container.scss'
import './style/aside.scss'
import './style/footer.scss'
import './style/header.scss'
import './style/main.scss'

export const LContainer = withInstallObj(Container, {
  Aside,
  Footer,
  Header,
  Main,
})

export default LContainer

export const LAside = withNoopInstall(Aside)
export const LFooter = withNoopInstall(Footer)
export const LHeader = withNoopInstall(Header)
export const LMain = withNoopInstall(Main)

export type ContainerInstance = InstanceType<typeof Container>
export type AsideInstance = InstanceType<typeof Aside>
export type FooterInstance = InstanceType<typeof Footer>
export type HeaderInstance = InstanceType<typeof Header>
export type MainInstance = InstanceType<typeof Main>
