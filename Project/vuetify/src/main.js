import Vue from 'vue'

// import App from './App.vue'
import Instance from './components/Instance.vue'

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Instance)
}).$mount('#app')
