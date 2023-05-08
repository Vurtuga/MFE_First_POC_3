<template>
  <div id="app">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/dashboard">Go to dashboard</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DashboardApp from './components/DashboardApp.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    DashboardApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
