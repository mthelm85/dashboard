<template lang="html">
  <div class="card-block">
    <p class="h6 card-header">Quote of the Day</p>
    <div class="card-body text-justify">
      <p>{{ quote.quote }}</p>
      <p class="text-right">-- {{ quote.author }}</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      quote: {
        quote: '',
        author: ''
      }
    }
  },
  created () {
    Axios({
      method: 'get',
      url: 'http://quotes.rest/qod.json?category=inspire'
    })
      .then((res) => {
        console.log(res.data.contents.quotes[0].quote)
        this.quote.quote = res.data.contents.quotes[0].quote
        this.quote.author = res.data.contents.quotes[0].author
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="css">
</style>
