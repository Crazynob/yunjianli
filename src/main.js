import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElIconModules from '@element-plus/icons'

const app = createApp(App)

for(let iconName in ElIconModules){
    app.component(transElIconName(iconName),ElIconModules[iconName])
}

function transElIconName(iconName){
    return 'i'+iconName.replace(/[A-Z]/g,(match)=>'-'+match.toLowerCase())
}


app
.use(store)
.use(router)
.use(ElementPlus)

app.mount('#app')
