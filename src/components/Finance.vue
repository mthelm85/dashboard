<template lang="html">
  <div class="card-block">
    <p class="h6 card-header">Finance</p>
    <div class=card-body>
      <ul class="list-group text-left">
        <li class="list-group-item">
          <h1 class="lead">AAPL</h1>
          <ul>
            <li>
              Latest: {{ AAPL.latest }}
            </li>
            <li>
              Volume: {{ AAPL.volume }}
            </li>
            <li>
              High/Low: {{ AAPL.high }} / {{ AAPL.low }}
            </li>
            <li>
              YTD: {{ AAPL.ytd }}
            </li>
          </ul>
        </li>
        <li class="list-group-item bg-light">
          <h1 class="lead">FB</h1>
          <ul>
            <li>
              Latest: {{ FB.latest }}
            </li>
            <li>
              Volume: {{ FB.volume }}
            </li>
            <li>
              High/Low: {{ FB.high }} / {{ FB.low }}
            </li>
            <li>
              YTD: {{ FB.ytd }}
            </li>
          </ul>
        </li>
        <li class="list-group-item">
          <h1 class="lead">TSLA</h1>
          <ul>
            <li>
              Latest: {{ TSLA.latest }}
            </li>
            <li>
              Volume: {{ TSLA.volume }}
            </li>
            <li>
              High/Low: {{ TSLA.high }} / {{ TSLA.low }}
            </li>
            <li>
              YTD: {{ TSLA.ytd }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Numeral from 'numeral'
export default {
  data () {
    return {
      AAPL: {
        latest: '',
        volume: '',
        high: '',
        low: '',
        ytd: ''
      },
      FB: {
        latest: '',
        volume: '',
        high: '',
        low: '',
        ytd: ''
      },
      TSLA: {
        latest: '',
        volume: '',
        high: '',
        low: '',
        ytd: ''
      }
    }
  },
  created () {
    Axios({
      method: 'get',
      url: 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote&range=1m&last=5'
    })
      .then((res) => {
        this.AAPL.latest = Numeral(res.data.AAPL.quote.latestPrice).format('$0,0.00')
        this.AAPL.volume = Numeral(res.data.AAPL.quote.latestVolume).format('0,0')
        this.AAPL.high = Numeral(res.data.AAPL.quote.high).format('$0,0.00')
        this.AAPL.low = Numeral(res.data.AAPL.quote.low).format('$0,0.00')
        this.AAPL.ytd = Numeral(res.data.AAPL.quote.ytdChange).format('0.00%')
        this.FB.latest = Numeral(res.data.FB.quote.latestPrice).format('$0,0.00')
        this.FB.volume = Numeral(res.data.FB.quote.latestVolume).format('0,0')
        this.FB.high = Numeral(res.data.FB.quote.high).format('$0,0.00')
        this.FB.low = Numeral(res.data.FB.quote.low).format('$0,0.00')
        this.FB.ytd = Numeral(res.data.FB.quote.ytdChange).format('0.00%')
        this.TSLA.latest = Numeral(res.data.TSLA.quote.latestPrice).format('$0,0.00')
        this.TSLA.volume = Numeral(res.data.TSLA.quote.latestVolume).format('0,0')
        this.TSLA.high = Numeral(res.data.TSLA.quote.high).format('$0,0.00')
        this.TSLA.low = Numeral(res.data.TSLA.quote.low).format('$0,0.00')
        this.TSLA.ytd = Numeral(res.data.TSLA.quote.ytdChange).format('0.00%')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="css">
</style>
