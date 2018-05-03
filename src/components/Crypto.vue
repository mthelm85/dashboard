<template lang="html">
  <div class="card-block">
    <p class="h6 card-header">Crypto Prices</p>
    <ul class="list-group">
      <li class="list-group-item">
        BTC: ${{prices.btc}}
      </li>
      <li class="list-group-item bg-light">
        ETH: ${{prices.eth}}
      </li>
      <li class="list-group-item">
        XRP: ${{prices.xrp}}
      </li>
      <li class="list-group-item bg-light">
        BCH: ${{prices.bch}}
      </li>
      <li class="list-group-item">
        LTC: ${{prices.ltc}}
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  created () {
    Axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then((res) => {
        console.log(res)
        this.prices = {
          btc: res.data[0].price_usd,
          eth: res.data[1].price_usd,
          xrp: res.data[2].price_usd,
          bch: res.data[3].price_usd,
          ltc: res.data[4].price_usd
        }
      })
  },
  data () {
    return {
      prices: ''
    }
  }
}
</script>

<style lang="css">
</style>
