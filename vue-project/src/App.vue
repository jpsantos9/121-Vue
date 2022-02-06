<template>
  <!-- <template> tag is where you put the html elements  -->
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <!-- v-if, v-else-if, v-else are used to hide/show html elements depending on a condition -->
    <h2 v-if="isEven">Even {{numOfClicks}}</h2>
    <h2 v-else>Odd {{numOfClicks}}</h2>
    <!-- v-on/@ is used to indicate an action (ex. @click, @change) -->
    <button @click="addClick">Click me</button>
    <ul>
      <!-- v-for is used for iterating an array -->
      <li v-for="(obj, index) in listOfObjects" :key="index">
        <!-- v-bind/: is used to assign a data to a html attribute -->
        <span :class="obj.color">{{index}}. {{obj.msg}}</span>
      </li>
    </ul>
    <!-- v-model is used to assign an input to a data -->
    <input type="text" v-model="userInput"/>
    <p>{{displayedInput}}</p>
  </div>
</template>

<script>
// <script> tag contains you data, methods, etc which are needed to run your web app
// note you can install the Vetur and Vue 3 Snippents extension for Vue highlights, snippets, formatting, debugging, etc
export default {
  // name is for naming your component
  name: 'app',
  // data contains all the objects/data needed for this component
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      numOfClicks: 0,
      listOfObjects: [{msg: 'hello', color: 'red'}, 
        {msg: 'world', color: 'blue'}, 
        {msg: 'cmsc', color: 'green'}, 
        {msg: '121', color: 'orange'}],
      userInput: '',
      displayedInput: ''
    }
  },
  // created is where data or methods you want to run when the component is created/opened
  created () {
    // this.helloWorldAlert()
  },

  // methods is where you place all the methods you will use for this component
  methods: {
    helloWorldAlert () {
      alert('Hello World')
    },

    addClick () {
      this.numOfClicks++;
    }
  },

  // computed are information/data which are derived from existing data
  computed: {
    isEven () {
      return this.numOfClicks % 2 == 0
    }
  },

  // watch checks for change in a data nd runs the following methods for it
  watch: {
    userInput (val) {
      this.displayedInput = val ? 'user input: ' + val : ''
    }
  }

  /*
  vue-router: http://router.vuejs.org/
  vuex: http://vuex.vuejs.org/
  vue-loader: http://vue-loader.vuejs.org/
  */
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.green {
  color: green;
}

.orange {
  color: orange;
}

</style>
