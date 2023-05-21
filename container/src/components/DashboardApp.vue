<template>
  <div class="container_dashboardRoot">
    <div class="dashboard" ref="dashboardRoot"> </div>
  </div>
</template>


<script>


let mount,destroy;

export default {
  name: 'DashboardApp',
  mounted: async function() {
    console.log("DashboardApp Mounted"); 
    // load remote module
    const remote = await this.$remoteLoader.loadModule ('http://localhost:8081/remoteEntry.js','dashboard','./DashboardApp');
    if(!remote){
      console.log("DashboardApp Remote not loaded");
      return;
    }
    mount = remote.mount;
    destroy = remote.destroy;
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