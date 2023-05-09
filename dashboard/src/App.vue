<template>

  <div id="_dashboard-wrapper">
    <router-link to="/dashboard" key="go_home">Go to Index</router-link>
    <router-link to="/dashboard/Test" key="go_dashboard">Go to Test Page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import DashboardIndex from './components/DashboardIndex.vue'

export default {
  name: 'App',
  components: {
    DashboardIndex
  }
}
</script>

<style>
.dashboard-wrapper{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
