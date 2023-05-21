<template>
  <div id="_container-wrapper">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
/* import { Header } from 'shared/AHBSUI'; */



export default {
  name: 'App',
  components: {
    Header 
  },
  mounted: async function(){
    console.log(this.uiComponent);
    console.log(this.$remoteLoader);
    console.log(this.$router);
    /* debugger
    console.log(Header); */
  },
}
</script>

