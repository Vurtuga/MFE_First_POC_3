<template>
    <div class="dashboard" ref="dashboardRoot"> </div>
</template>

<script>
import {mount} from 'dashboard/DashboardApp';


export default {
  name: 'DashboardApp',
  mounted: function() {
    const{onParentNavigate} = mount(this.$refs.dashboardRoot,{
      initialPath: this.$router.currentRoute.path,
      onNavigate:(args)=>{

          if(this.$router.currentRoute.path !== args.to.path){
            this.$router.push(args.to.path);  
          }
      }
    });

    this.$router.afterEach((to, from)=>{

        onParentNavigate({to, from});
    });
  },
}
</script>