// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import SuiVue from 'semantic-ui-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
 
// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuesax, {
  // options here
})

Vue.use(SuiVue);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
