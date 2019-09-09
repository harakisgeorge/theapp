<template>

   <div id="student-form">
    <img alt="Vue logo" src="./assets/cyborg.svg" />

     <md-card-content>
          <div class="md-layout md-gutter md-alignment-center">
            <div class="md-layout-item md-size-60">
              <md-field md-inline>
                <label>{{ $t('messages.username') }}</label>
                <md-input v-model="username"></md-input>
              </md-field>
              <md-field>
                <label>{{ $t('messages.password') }}</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <div class="md-layout md-alignment-center">
                <md-button v-on:click="onLoginClick()" class="md-raised">{{ $t('messages.login') }}</md-button>
              </div>
              <div class="md-layout md-alignment-center">
                <md-button v-on:click="onRegisterClick()" class="md-raised">{{ $t('messages.createUser') }}</md-button>
              </div>
            </div>
          </div>
        </md-card-content>
   </div>
</template>

<script>
import UserService from '@/services/userService'

let userService = new UserService()

export default {
   name: 'student-form',
   data(){
      return{
         student:{
            username: '',
            password: ''
         },
      }
   },
   methods: {
      onLoginClick () {
      let self = this
      userService.login({
        username: this.username,
        password: this.password
      }, function (data) {
        if (data.token) {
          localStorage.setItem('user', JSON.stringify(data))
        }
        self.$router.push({path: '/courses'})
      })
    },
    onRegisterClick: function () {
      this.$router.push('/registration')
    }
  }
}
</script>

<style scoped>

</style>