import { createApp } from 'vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// svg插件需要配置的代码
import 'virtual:svg-icons-register'

//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 获取应用实例
const app = createApp(App)
app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn
});




// 全局组件
import SvgIcon from '@/components/SvgIcon/index.vue';
app.component('SvgIcon', SvgIcon)
app.mount('#app')
