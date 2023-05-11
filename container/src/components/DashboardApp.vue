<template>
    <div class="dashboard" ref="dashboardRoot"> </div>
</template>

<script>
import {mount,destroy} from 'dashboard/DashboardApp';


export default {
  name: 'DashboardApp',
  
  mounted: function() {
    console.log("DashboardApp Mounted");
    const{onParentNavigate} = mount(this.$refs.dashboardRoot,{
      initialPath: this.$router.currentRoute.path,
      onNavigate:(args)=>{
          if(this.$router.currentRoute.path !== args.to.path){
            this.$router.push(args.to.path);  
          }
      }
    });
    //listen to route changes
    this.$router.afterEach(onParentNavigate);
  },
  destroyed: function() {
    destroy();
    console.log("DashboardApp Destroyed");
  },
}
</script>