<template>
  <div>

     <TopMenu/>
     <ModulesCanvas/>
  </div>
</template>

<style lang="scss" scoped>
  .md-content {
    width: 200px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }


</style>

<script>
import TopMenu from "@/components/TopMenu"
import ModulesCanvas from "@/components/ModulesCanvasMaterial"
export default {
  name: 'PaperContent',
  components: {
     TopMenu,
     ModulesCanvas
  },
  data: () => ({
    amount:0
  })


}
</script>