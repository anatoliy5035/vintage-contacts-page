import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'

Vue.use(VeeValidate, {
  classes: true,
  inject: false,
  fieldsBagName: 'veeFields'
})
