<template>
  <div class="row">
    <div class="pl-4 col-12"><strong>Target: </strong>{{ target.name }}</div>
    <div class="pl-4 col-12"><strong>Root Domain: </strong>{{ target.rootDomain }}</div>
    <div class="pl-4 col-12"><strong>Subdomains: </strong>{{ target.subdomains.length }}</div>
    <div class="pl-4 col-12"><strong>Agents: </strong>{{ agentsCount }}</div>
  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'TargetGeneralTag', 
    computed: mapState({
      target: state => state.targets.currentTarget,
      agentsCount: state => state.agents.agents.length 
    }), 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>