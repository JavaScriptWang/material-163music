import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
const app = createApp(App)

import router from "./router"
app.use(router)

import BalmUI from "balm-ui"
import BalmUIPlus from "balm-ui-plus"
import "balm-ui-css"
app.use(BalmUI)
app.use(BalmUIPlus)

app.mount("#app")
