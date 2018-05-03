<template>
  <div id="app">
    <div class="container-fluid">
        <draggable class="row mt-5 justify-content-center dragArea" :list="widgets1" :options="{group: 'widgets'}" v-model="widgets1">
          <div class="col text-center drag" v-for="widget in widgets1" :key="widget.id">
            <div class="card">
              <router-view :name="widget.name"></router-view>
            </div>
          </div>
        </draggable>
      <draggable class="row mt-5 justify-content-center dragArea" :list="widgets2" :options="{group: 'widgets'}"  v-model="widgets2">
        <div class="col text-center drag" v-for="widget in widgets2" :key="widget.id">
          <div class="card">
            <router-view :name="widget.name"></router-view>
          </div>
        </div>
      </draggable>
      <br>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'App',
  data () {
    return {
      widgets1: [
        {
          name: 'premTable',
          id: 0
        },
        {
          name: 'weather',
          id: 1
        },
        {
          name: 'news',
          id: 2
        }
      ],
      widgets2: [
        {
          name: 'crypto',
          id: 3
        },
        {
          name: 'finance',
          id: 4
        },
        {
          name: 'quote',
          id: 5
        }
      ]
    }
  },
  components: {
    draggable
  }
}
</script>

<style>
.card {
  -webkit-box-shadow: 3px 3px 5px 0px rgba(214,214,214,1);
  -moz-box-shadow: 3px 3px 5px 0px rgba(214,214,214,1);
  box-shadow: 3px 3px 5px 0px rgba(214,214,214,1);
}

.dragArea {
  min-height: 20px;
  min-width: 50px;
}

</style>
