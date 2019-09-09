<template>
  <div>
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'TabIcons'
  }
</script>

<style lang="scss" scoped>
  .md-tabs + .md-tabs {
    margin-top: 24px;
  }
  md-label{
     font-size: 100px;
  }
</style>