// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'

import VueFormGenerator from 'vue-form-generator'
import fieldDate from './components/fieldDate'
import fieldTime from './components/fieldTime'
Vue.component('fieldDate', fieldDate)
Vue.component('fieldTime', fieldTime)
Vue.use(VueFormGenerator)

import * as uiv from 'uiv'
import locale from 'uiv/src/locale/lang/zh-CN'
Vue.use(uiv, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
