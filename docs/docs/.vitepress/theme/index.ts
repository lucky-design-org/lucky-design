import Theme from 'vitepress/theme'
import './style/var.css'
import 'lucky-design/dist/style.css'

import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('DemoPreview', ElementPlusContainer)
  },
}
