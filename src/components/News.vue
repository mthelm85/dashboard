<template lang="html">
  <div class="card-block" style="max-height: 600px; overflow-y: scroll;">
    <p class="h6 card-header">News</p>
    <ul class="list-group text-left">
      <li v-for="article in articles" class="list-group-item borderless p-3" :key="article.title">
        <a :href="article.url" target="_blank"><strong>{{ article.title }}</strong></a>
        <br>
        {{ article.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  created () {
    Axios({
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=dc640c5653d24d6e8b0c30b41c643368`
    })
      .then((res) => {
        console.log(res.data)
        var i
        for (i = 0; i < 5; i++) {
          this.articles.push({
            title: res.data.articles[i].title,
            description: res.data.articles[i].description,
            url: res.data.articles[i].url
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  data () {
    return {
      articles: []
    }
  }
}
</script>

<style scoped lang="css">
li.borderless {
  border: 0 none;
}
</style>
