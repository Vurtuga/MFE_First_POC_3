<template>
  <div id="_container-wrapper">
    <Header></Header>
    <router-view></router-view>
    
  </div>
</template>

<script>
import { Header } from 'shared/AHBSUI';
export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

