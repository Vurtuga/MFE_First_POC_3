<template>
    <div class="dashboard" ref="dashboardRoot"> </div>
  </template>

<script>
import {mount} from 'dashboard/DashboardApp';

export default {
  name: 'DashboardApp',
  mounted: function() {
    mount(this.$refs.dashboardRoot);
  },
}
</script>