<template>
  <div>

     <TopMenu/>
     <ForumsCanvas/>
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
import ForumsCanvas from "@/components/ForumsCanvas"
import TopMenu from "@/components/TopMenu"
export default {
  name: 'Forums',
  components: {
     ForumsCanvas,
     TopMenu
  },
  data: () => ({
    amount:0
  })

}
</script>