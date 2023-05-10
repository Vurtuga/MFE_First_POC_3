<template>
    <div class="_dashboard-test">
      <h3>HI Form Dashboard Test Page</h3>
      <XButton/>
    </div>
  </template>

<script>
import { UI_Helpers , XButton } from 'shared/AHBSUI';

export default {
  name: 'TestPage',
  mounted:function(){
    console.log("TestPage Mounted");
    /* UI_Helpers.alertString("alert");
    UI_Helpers.logString("alert"); */
  },
  components:{
    XButton
  },
  destroyed: function() {
    console.log("TestPage Destroyed");
  },
}
</script>
