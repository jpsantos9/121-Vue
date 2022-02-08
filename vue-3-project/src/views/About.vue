<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="joke.type == 'single'">
      <p>{{joke.joke}}</p>
    </div>
    <div v-else>
      <p>1. {{joke.setup}}</p>
      <p>2. {{joke.delivery}}</p>
    </div>
  </div>
</template>
<script>
// another way of calling store
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'about',
  data() {
    return {
      joke: {}
    }
  },
  created () {
    // just used a public api for sample: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
    const api = 'https://v2.jokeapi.dev/joke/Any?safe-mode'
    this.axios.get(api).then((response) => {
        this.joke = response.data
      })
    
    // sample code for calling state
    console.log('before: ' + this.$store.state.count)
    this.$store.commit('increment')   // sample code for calling mutations
    console.log('after: ' + this.count)

    console.log(this.$store.getters.fullName) // sample code for getters
    console.log(this.fullName)
  },
  computed: {
    // map this.count to store.state.count
    ...mapState(['count']),
    ...mapGetters(['fullName'])
  }
}
</script>
