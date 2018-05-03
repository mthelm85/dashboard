<template lang="html">
  <div class="card-block">
    <ul class="list-group">
      <p class="h6 card-header">Premier League Standings</p>
      <li class="list-group-item p-0" :class="[{green: colorGreen(team.position)}, {red: colorRed(team.position)}]" v-for="team in table" :key="team.position">
        <small>{{ team.position + 1 }} {{ team.name }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  created () {
    Axios({
      method: 'get',
      url: 'http://api.football-data.org/v1/competitions/398/leagueTable',
      headers: {
        'X-Auth-Token': '2e3fbd8e33a34c1fa42caaa1929712c5',
        'Accept': 'application/json'
      }
    })
      .then((res) => {
        console.log(res)
        var i
        for (i = 0; i < res.data.standing.length; i++) {
          this.table.push(
            {
              name: res.data.standing[i].teamName,
              position: i
            }
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  data () {
    return {
      table: []
    }
  },
  methods: {
    colorGreen (pos) {
      if (pos < 4) {
        return true
      } else {
        return false
      }
    },
    colorRed (pos) {
      if (pos > 16) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="css">
.green {
  background-color: #5cb85c;
  color: white;
}

.red {
  background-color: #d9534f;
  color: white;
}
</style>
