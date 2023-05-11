<template>
  <div id="_container-wrapper">
    <router-link to="/" key="go_home" exact-path>Go to Home</router-link>
    <router-link to="/dashboard" key="go_dashboard">Go to dashboard</router-link>
    <router-view  :key="$route.fullPath"></router-view>
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

