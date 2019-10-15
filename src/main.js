import Vue from 'vue'
import App from '@/App.vue'

import store from '@/store'
import router from '@/router'
import {Table, TableColumn} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Table, TableColumn)

const vue = new Vue({
  router,
  store,
  render: h => h(App)
})

vue.$mount('#app')
