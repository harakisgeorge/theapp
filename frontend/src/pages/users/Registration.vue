<template>
  <form novalidate class="top-padding md-layout md-alignment-center" @submit.prevent="validateUser">
    <md-card id="form_card" class="md-layout-item md-size-80 md-small-size-95">
      <md-card-header>
        <div class="md-title text-center">{{ $t("messages.registration") }}</div>
      </md-card-header>
      <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m301.206 502h140.758v-117.244h-371.928v117.244h140.758" fill="#ffee80"/><path d="m127.666 317.604v-59.586c0-41.276 33.461-74.737 74.737-74.737h107.194c41.276 0 74.737 33.461 74.737 74.737v59.586z" fill="#66e0f7"/><ellipse cx="256" cy="96.641" fill="#ffdcd5" rx="86.641" ry="86.641" transform="matrix(.707 -.707 .707 .707 6.645 209.325)"/><path d="m157 453.378h-27.333c-5.523 0-10-4.478-10-10s4.478-10 10-10h27.333c5.523 0 10 4.478 10 10s-4.477 10-10 10z"/><path d="m232.111 453.378h-27.334c-5.522 0-10-4.478-10-10s4.478-10 10-10h27.334c5.523 0 10 4.478 10 10s-4.477 10-10 10z"/><path d="m307.223 453.378h-27.334c-5.522 0-10-4.478-10-10s4.478-10 10-10h27.334c5.522 0 10 4.478 10 10s-4.478 10-10 10z"/><path d="m382.333 453.378h-27.333c-5.522 0-10-4.478-10-10s4.478-10 10-10h27.333c5.522 0 10 4.478 10 10s-4.478 10-10 10z"/><path d="m255.819 512c-4.233 0-8.084-2.765-9.462-6.763-1.363-3.954-.037-8.474 3.248-11.067 3.242-2.559 7.805-2.844 11.352-.739 3.58 2.125 5.489 6.439 4.663 10.519-.934 4.616-5.079 8.05-9.801 8.05z"/><path d="m441.964 512h-140.758c-5.522 0-10-4.478-10-10s4.478-10 10-10h130.758v-97.244h-351.928v97.244h130.758c5.523 0 10 4.478 10 10s-4.477 10-10 10h-140.758c-5.522 0-10-4.478-10-10v-117.244c0-5.522 4.478-10 10-10h371.928c5.522 0 10 4.478 10 10v117.244c0 5.522-4.478 10-10 10z"/><path d="m314.616 173.428c23.1-17.675 38.025-45.521 38.025-76.788 0-53.287-43.353-96.64-96.641-96.64s-96.641 43.353-96.641 96.641c0 31.267 14.925 59.113 38.025 76.788-44.398 2.606-79.719 39.55-79.719 84.59v59.586c0 5.523 4.478 10 10 10h256.668c5.522 0 10-4.477 10-10v-59.586c.001-45.04-35.32-81.985-79.717-84.591zm-135.257-76.787c0-42.26 34.381-76.641 76.641-76.641s76.641 34.381 76.641 76.641-34.381 76.641-76.641 76.641-76.641-34.382-76.641-76.641zm194.975 210.963h-236.668v-49.586c0-35.696 29.041-64.737 64.737-64.737h107.193c35.696 0 64.737 29.041 64.737 64.737v49.586z"/></svg>
      <md-card-content >
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-size-55 md-small-size-75">
            <md-field md-inline :class="getValidationClass('username')">
              <label for="usernameInput">{{ $t("messages.username") }}</label>
              <md-input id="usernameInput" v-model="form.username"></md-input>
              <span class="md-error" v-if="!$v.form.username.required">{{ $t("messages.userNameRequired") }}</span>
              <span class="md-error" v-else-if="!$v.form.username.minlength">{{ $t("messages.userNameInvalid") }}</span>
            </md-field>
            <md-field md-inline :class="getValidationClass('email')">
              <label for="emailInput">Email</label>
              <md-input id="emailInput" v-model="form.email"></md-input>
              <span class="md-error" v-if="!$v.form.email.required">{{ $t("messages.emailRequired") }}</span>
              <span class="md-error" v-else-if="!$v.form.email.minlength">{{ $t("messages.emailInvalid") }}</span>
            </md-field>
            <md-field :class="getValidationClass('password')">
              <label for="passwordInput">{{ $t("messages.password") }}</label>
              <md-input id="passwordInput" v-model="form.password" type="password"></md-input>
              <span class="md-error" v-if="!$v.form.password.required">{{ $t("messages.passwordRequired") }}</span>
            </md-field>
            <md-field :md-toggle-password="false" :class="getConfirmPasswordValidation()">
              <label for="repeatPasswordInput">{{ $t("messages.repeat_password") }}</label>
              <md-input id="repeatPasswordInput" v-model="form.repeat_password" type="password"></md-input>
              <span class="md-error" v-if="!samePassword">{{ $t("messages.passwordMatch") }}</span>
            </md-field>
            <div class="md-layout md-alignment-center">
              <md-button class="md-raised md-accent" v-on:click="onCancelClick()">{{ $t("messages.cancel") }}</md-button>
              <md-button type="submit" class="md-raised md-primary">{{ $t("messages.createUser") }}</md-button>
            </div>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

import UserService from '@/services/userService'
let userService = new UserService()

export default {
  name: 'Registration',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        repeat_password: '',
        userRole: 'STUDENT'
      },
      samePassword: true
    }
  },
  validations: {
    form: {
      username: {
        required,
        minlength: minLength(3),
        maxLength: maxLength(20)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minlength: minLength(4),
        maxLength: maxLength(20)
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    getConfirmPasswordValidation () {
      if (this.form.password !== this.form.repeat_password) {
        this.samePassword = false
        return {
          'md-invalid': true
        }
      } else {
        this.samePassword = true
      }
    },
    createUser () {
      let self = this
      userService.register({
        username: this.form.username,
        email: this.form.email,
        password: this.form.password,
        role: 'STUDENT'
      }, function () {
        self.$router.push({ path: '/user' })
      })
    },
    onCancelClick () {
      this.$router.push({ path: '/user' })
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.createUser()
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

svg{
  padding-top:20px;
  height:150px;
  width:150px;
}

#form_card{
    background-color: inherit;

}
</style>
