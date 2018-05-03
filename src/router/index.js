import Vue from 'vue'
import Router from 'vue-router'

import PremTable from '@/components/PremTable.vue'
import Weather from '@/components/Weather.vue'
import News from '@/components/News.vue'
import Crypto from '@/components/Crypto.vue'
import Finance from '@/components/Finance.vue'
import Quote from '@/components/Quote.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        premTable: PremTable,
        weather: Weather,
        news: News,
        crypto: Crypto,
        finance: Finance,
        quote: Quote
      }
    }
  ]
})
