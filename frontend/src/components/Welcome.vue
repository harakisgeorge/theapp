<template>

     <md-card id="myDiv" class="space">
        <div md-icon="tag_faces"></div>

        <md-card-header-text>
          <div class="md-title" style="font-size:40px">Welcome!</div>
        </md-card-header-text>
         <div class="space">The purpose of this web application is to help you practise your skills in the class EPL 211:  Theory of Computation. If you still need to study the material first click on the Material Button else go straight to Practise!
         </div>
         <div>
            <md-button v-on:click="onMaterialClick()" class="md-primary md-raised">Material</md-button>
            <md-button v-on:click="onPractiseClick()" class="md-primary md-raised">Practise</md-button>

         </div>
     </md-card>
</template>

<script>
  export default {
    name: 'EmptyStateBasic',
    methods:{
       onPractiseClick: function(){
         this.$router.push('/practise')
       },
       onMaterialClick: function(){
          this.$router.push('/material')
       }
    }
  }
</script>


<style lang="scss" scoped>
  
  .md-icon{
     height:150px;
     width:15%;
  }
  .md-button{
    border-style: outset;
    width:300px;
    font-size:25px;
  }
  .md-card{
    width: 65%;
    height:680px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    background-color: #6f96e9;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(170,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%236f96e9'/%3E%3Cstop offset='1' stop-color='%23ac9ad0'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%238fe3e7' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%238fe3e7' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%238fe3e7' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%238fe3e7' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.42'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
  .md-title{
    font-size:40px;
  }

  .space{
    padding-bottom:70px;
    padding-top:70px;
  }

   div{
      font-size:20px;
   }
</style>
  
