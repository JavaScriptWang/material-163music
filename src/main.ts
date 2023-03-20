import { createApp } from "vue"
import { createPinia } from "pinia"
import router from "./router"

import App from "./App.vue"
const app = createApp(App)

app.use(createPinia())
app.use(router)

import BalmUI from "balm-ui"
import BalmUIPlus from "balm-ui-plus"
import "balm-ui-css"
import "./assets/main.css"

app.use(BalmUI, {})
app.use(BalmUIPlus)

app.mount("#app")
