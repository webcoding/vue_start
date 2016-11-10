import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const main = new Vue({
  router,
  store,
  ...App // Object spread copying everything from App.vue
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { main, router, store }
