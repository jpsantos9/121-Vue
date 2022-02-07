<template>
  <div id="nav">
    <!-- links that is used to change views -->
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link to="/about" >About</router-link>
  </div>
  <!-- view the will be displayed depending on the select route -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
