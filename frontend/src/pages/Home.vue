<template>
  <div>

     <TopMenu/>
     <Welcome/>
  </div>
</template>

<style lang="scss" scoped>
  

</style>

<script>
import TopMenu from "@/components/TopMenu"
import Welcome from "@/components/Welcome"
export default {
  name: 'PaperContent',
  components: {
     TopMenu,
     Welcome
  },
  data: () => ({
    amount:0
  })


}
</script>