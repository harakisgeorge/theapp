<template>
  <div>

     <TopMenu/>
     <md-card id="myDiv" >
        <div md-icon="tag_faces"></div>

        <md-card-header-text class="space">
          <div class="md-title" style="font-size:40px">Quiz finished!</div>
        </md-card-header-text>
         <div class="space"> Congratulations on finishing the quiz.</div>
            <md-button v-on:click="onQuizClick()" class="md-primary md-raised">Redo Quiz</md-button>
            <md-button v-on:click="onPractiseClick()" class="md-primary md-raised">Practise other modules</md-button>
     </md-card>  

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
  .md-card{
    font-size:20px;
    width: 65%;
    height:580px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    background-color: #9f4eaa;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%239f4eaa'/%3E%3Cstop offset='1' stop-color='%238cfbff'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23fef4ff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23fef4ff' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23fef4ff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23fef4ff' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
  .space{
    padding-bottom:100px;
  }

  .md-button{
    height:40px;
    margin-left:50px;
  }
  
</style>

<script>
import TopMenu from "@/components/TopMenu"
export default {
  name: 'PaperContent',
  components: {
     TopMenu,
  },
  data: () => ({
    amount:0
  }),
   methods:{
       onPractiseClick: function(){
         this.$router.push('/practise')
       },
       onQuizClick: function(){
         this.$router.push('/practise/quiz')
      }
    }


}
</script>