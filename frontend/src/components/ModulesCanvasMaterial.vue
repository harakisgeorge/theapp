<template>
  <md-card id="myDiv">

        <md-card-header-text>
          <div class="md-title" style="font-size:40px">MATERIAL: Choose topic</div>
        </md-card-header-text>
    
    <div>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-center" >Κανονικές Γλωσσες (1)</md-button>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-right" >Κανονικές Γλωσσες (2)</md-button> <br/>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-right" >Ασυμφραστικές Γλωσσες (1)</md-button>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-right" >Ασυμφραστικές Γλωσσες (2)</md-button>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-right" >Ασυμφραστικές Γλωσσες (3)</md-button> <br/>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-right" >To Δόγμα Church-Turing</md-button>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-right" >Διαγνωσιμότητα</md-button> <br/>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-right">Αναγωγές</md-button>
      <md-button href="http://www.cs.ucy.ac.cy/~annap/epl211/notes/lecture4-6.pdf" class="md-fab-top-right">Χρονική Πολυπλοκότητα</md-button>

    </div>

      
    </md-card>
</template>

<style lang="scss" scoped>
 .md-card{
    width: 65%;
    height:680px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    background-color:white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #6f96e9;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(170,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%236f96e9'/%3E%3Cstop offset='1' stop-color='%23ac9ad0'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%238fe3e7' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%238fe3e7' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%238fe3e7' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%238fe3e7' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.42'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
 }
 
 .md-card-header-text{
   margin-top:30px;
   margin-bottom:30px;
 }
 
 .md-button{
   margin-top:8%;
   border: 2px black;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   font-size:20px;
 }
</style>

<script>
export default {
data: {
   
},
methods: {
    onQuizClick: function(){
      this.$router.push('/practise/quiz')
    }
  }
}
</script>