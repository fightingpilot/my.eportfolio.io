//import L from 'leaflet';
//Vue.use(L);
import L from 'leaflet';
Object.defineProperty(Vue.prototype, '$L', { value: L });
import 'leaflet/dist/leaflet.css';

import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'

Vue.use(VueCompositionAPI)

import VuePapaParse from 'vue-papa-parse';
Vue.use(VuePapaParse);

import VueTween from '@seregpie/vuetween';
Vue.use(VueTween);

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

Vue.prototype.$window = window;

new Vue({
  render: h => h(App),
}).$mount('#app')
