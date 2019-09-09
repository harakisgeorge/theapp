<template>
  <div class="HelloWorld">
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
   </div>  
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
