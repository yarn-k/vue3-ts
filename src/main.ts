import { createApp } from 'vue'

import App from './App.vue'

createApp(App).mount('#app')

const fun = () => 
{
  console.log("函数执行")
}

fun()