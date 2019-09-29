<template>
  <div>

     <TopMenu/>
     <ExerciseCanvas/>
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
import ExerciseCanvas from "@/components/ExerciseCanvas"
export default {
  name: 'PaperContent',
  components: {
     TopMenu,
     ExerciseCanvas
  },
  data: () => ({
    amount:0
  })

}
</script>