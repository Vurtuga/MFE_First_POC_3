<template>

  <div id="_dashboard-wrapper">
    <router-view></router-view>
    <Header></Header>
  </div>
</template>

<script>
import { Header } from 'shared/AHBSUI';

export default {
  name: 'App',
  components: {
    Header
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
