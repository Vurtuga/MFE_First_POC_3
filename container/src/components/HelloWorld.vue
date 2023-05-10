<template>
  <div class="home">
   <h4>Home</h4>
   <XButton/>
   </div>
</template>

<script>
import { UI_Helpers , XButton } from 'shared/AHBSUI';

export default {
  name: 'HelloWorld',
  mounted:function(){
    console.log("HelloWorld Mounted");
    UI_Helpers.alertString("alert");
    UI_Helpers.logString("alert");
  },
  components:{
    XButton
  }
}
</script>
