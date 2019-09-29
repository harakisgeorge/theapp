<template>

    <md-card md-with-hover>
 
        <div id="progress_bar">
          <md-progress-bar md-mode="determinate" :md-value="amount"></md-progress-bar>
          <input id="progress_subBar" type="range" v-model.number="amount">
        </div>

        <md-card-content> {{ question }} </md-card-content> 

        <md-radio  v-model="radio" :value="objA">{{objA.name}}</md-radio> 
        <md-radio  v-model="radio" :value="objB">{{objB.name}}</md-radio> <br/>
        <md-radio  v-model="radio" :value="objC">{{objC.name}}</md-radio> 
        <md-radio  v-model="radio" :value="objD">{{objD.name}}</md-radio> <br/>

        <div id="space"></div>
        
        <md-button style="  background-color: rgba(255, 222, 121, 0.96)" v-on:click="increase_progressbar()" class="md-dense md-primary">Skip</md-button>
        <md-button style="  background-color: #48E4CA" v-on:click="increase_progressbar()" class="md-dense md-primary">Submit</md-button>
        <md-button style="  background-color: #EF5348" @click="active = true" class="md-dense md-primary">Cancel Quiz</md-button>

        <md-dialog-confirm
          :md-active.sync="active"
          md-title="Are you sure you want to cancel the quiz?"
          md-content="All progress will be lost and you will be returned to Practise selection screen."
          md-confirm-text="Yes"
          md-cancel-text="No"
        
          @md-confirm="onConfirm" />
 
    </md-card>
      <!--<small>Model value: {{ radio }}</small> -->
</template>

<script>
  //import ExerciseService from '../services/exerciseService'
  //let exerciseService = new ExerciseService()
  import { axios } from '@/plugins/axios'


  export default {

    name: 'RegularRadio',
    data: () => ({
      title: "Question 1",        
      question: "Power is the rate of energy being generated or consumed. For example, if an engine produces 1000 Watts of power (where Watts is Joules/second), then after an hour the total energy produced by the engine is 1000 Joules/second × 3600 seconds = 3,600,000 Joules.",
      objA: { name: '299 792 458 m / s' },
      objB: { name: '555 555 222 m / s' },
      objC: { name: '100 000 000 000 000 000 000 000m / s' },
      objD: { name: '250 000 m / s' },
      radio: false,
      amount:0,
      increment:25,
      correct_choice:1,
      active: false
    
  }),
    methods:{
      increase_progressbar: function(){
        let self = this
        axios.get('https://baconipsum.com/api/?type=meat-and-filler')
          .then(function (response){
             console.log(response.data[0])
             self.question= JSON.stringify(response.data[0])
         })
        this.objA.name = (self.random_number_generator(50000000000))
        this.objB.name = (self.random_number_generator(50000000000))
        this.objC.name = (self.random_number_generator(50000000000))
        this.objD.name = (self.random_number_generator(50000000000))

        this.amount += this.increment
        if(this.amount===(100)){
          this.$router.push('/practise/quiz/finish')
        }
        
      },
      onConfirm: function(){
        this.$router.push('/practise')
         
      },
      random_number_generator: function(max){
        return (Math.floor(Math.random() *max) + 1)

      }

    }
  }
</script>

<style lang="scss" scoped>
  
  .md-radio{
    border-style: outset;
    width:40%;
    height:100px;
    font-size:20px;
  }
  .md-button{
    border-style: outset;
    width:300px;
    font-size:25px;
      color: white;

  }
  .md-card{
    width: 65%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    background-color: #adaeff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23adaeff'/%3E%3Cstop offset='1' stop-color='%2370ffd9'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
  .md-title{
    font-size:40px;
  }
  .md-card-content{
    padding-top:40px;
    padding-bottom: 120px;
    font-size:20px;
    height:200px;
  }
  #space{
    padding-bottom:100px;
  }

  #progress_bar{
    width: 65%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;  
  }
  #cancel_button{
    width:10px;
    align-content: left;
  }
  .md-progress-bar{
    height:30px;
  }
  
  #progress_subBar{
    display:none;
  }
</style>