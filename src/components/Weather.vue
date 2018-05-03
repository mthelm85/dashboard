<template lang="html">
  <div class="card-block">
    <p class="h6 card-header">Weather - Owasso, OK</p>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <p class="display-4">{{ current[0].temp }}&deg;</p>
        </div>
        <div class="col">
          <img :src="iconURL(this.current[0].icon)" :alt="this.current[0].descriptor">
          <p>{{ current[0].descriptor }}</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <p class="lead">{{ weekDay(forecast[0].Date) }}</p>
          <img :src="iconURL(this.forecast[0].Day.Icon)">
          <br>
          <span>Hi: {{ this.forecast[0].Temperature.Maximum.Value }}&deg;</span>
          <br>
          <span>Lo: {{ this.forecast[0].Temperature.Minimum.Value }}&deg;</span>
        </div>
        <div class="col">
          <p class="lead">{{ weekDay(forecast[1].Date) }}</p>
          <img :src="iconURL(this.forecast[1].Day.Icon)">
          <br>
          <span>Hi: {{ this.forecast[1].Temperature.Maximum.Value }}&deg;</span>
          <br>
          <span>Lo: {{ this.forecast[1].Temperature.Minimum.Value }}&deg;</span>
        </div>
        <div class="col">
          <p class="lead">{{ weekDay(forecast[2].Date) }}</p>
          <img :src="iconURL(this.forecast[2].Day.Icon)">
          <br>
          <span>Hi: {{ this.forecast[2].Temperature.Maximum.Value }}&deg;</span>
          <br>
          <span>Lo: {{ this.forecast[2].Temperature.Minimum.Value }}&deg;</span>
        </div>
        <div class="col">
          <p class="lead">{{ weekDay(forecast[3].Date) }}</p>
          <img :src="iconURL(this.forecast[3].Day.Icon)">
          <br>
          <span>Hi: {{ this.forecast[3].Temperature.Maximum.Value }}&deg;</span>
          <br>
          <span>Lo: {{ this.forecast[3].Temperature.Minimum.Value }}&deg;</span>
        </div>
        <div class="col">
          <p class="lead">{{ weekDay(forecast[4].Date) }}</p>
          <img :src="iconURL(this.forecast[4].Day.Icon)">
          <br>
          <span>Hi: {{ this.forecast[4].Temperature.Maximum.Value }}&deg;</span>
          <br>
          <span>Lo: {{ this.forecast[4].Temperature.Minimum.Value }}&deg;</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Axios from 'axios'
import Moment from 'moment'
export default {
  created () {
    Axios({
      method: 'get',
      url: 'http://dataservice.accuweather.com/currentconditions/v1/340142.json?apikey=ILaLwNABOqBtDoyTnLFwH5fP08Pn0SrW'
    })
      .then((res) => {
        this.current.push({
          temp: res.data[0].Temperature.Imperial.Value,
          descriptor: res.data[0].WeatherText,
          icon: res.data[0].WeatherIcon
        })
      })
      .catch((err) => {
        console.log(err)
      })
    Axios({
      method: 'get',
      url: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/340142.json?apikey=ILaLwNABOqBtDoyTnLFwH5fP08Pn0SrW'
    })
      .then((res) => {
        var i
        for (i = 0; i < res.data.DailyForecasts.length; i++) {
          this.forecast.push(res.data.DailyForecasts[i])
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  data () {
    return {
      current: [],
      forecast: []
    }
  },
  methods: {
    iconURL (num) {
      if (num < 10) {
        return `https://developer.accuweather.com/sites/default/files/0${num}-s.png`
      } else {
        return `https://developer.accuweather.com/sites/default/files/${num}-s.png`
      }
    },
    weekDay (date) {
      return Moment(date).format('dddd')
    }
  }
}
</script>

<style lang="css">
</style>
