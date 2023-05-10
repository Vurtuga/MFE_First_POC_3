<template>
  <div class="_dashboard-index">
    <h3>HI Form Dashboard Index</h3>
  </div>
</template>

<script>
export default {
  name: 'DashboardIndex',
  mounted:function(){

    console.log("DashboardIndex Mounted");
    UI_Helpers.alertString("alert");
    UI_Helpers.logString("alert");
  },
  destroyed: function() {

console.log("DashboardIndex Destroyed");
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
