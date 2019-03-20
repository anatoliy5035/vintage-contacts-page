<template>
  <div id="contacts-us" class="c-contact-us">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="c-section-title">Contact Us</div>
          <!-- form -->
          <form class="c-contacts-form" @submit.prevent="validateForm">
            <!-- input -->
            <div class="c-control-input">
              <input id="name" v-model="formData.name" v-validate="'required'" type="text" name="name" class="c-input">
              <label for="name" class="c-control-label">Name</label>
              <div class="c-control-line"></div>
            </div>
            <!-- input -->
            <div class="c-control-input">
              <input id="phone" v-model="formData.phone" v-validate="'required'" type="text" name="phone" class="c-input">
              <label for="phone" class="c-control-label">Phone</label>
              <div class="c-control-line"></div>
            </div>
            <!-- input -->
            <div class="c-control-input">
              <input id="email" v-model="formData.email" v-validate="'required|email|max:100'" type="email" name="email" class="c-input">
              <label for="email" class="c-control-label">E-mail</label>
              <div class="c-control-line"></div>
            </div>
            <!-- input -->
            <div class="c-control-checkbox">
              <input id="agreement" v-model="formData.aggree" v-validate="'required'" type="checkbox" name="agreement">
              <label for="agreement" class="c-control-label">I agree the processing of personal data</label>
            </div>
            <!-- form footer -->
            <div class="c-contacts-form-footer">
              <button class="btn" type="submit" :disabled="submitProcess">Get in touch</button>
            </div>
          </form>
        </div>
        <div class="col">
          <div class="c-contact-us-text">
            Please tell us more about your request and give us info about your company and country
          </div>
        </div>
      </div>
    </div>
    <!-- form alert -->
    <alert ref="alert" />
  </div>
</template>
<script>
import Alert from '~/components/Alert'
export default {
  name: 'ContactsUs',
  components: {
    Alert
  },
  data() {
    return {
      showAlert: false,
      submitProcess: false,
      formData: {
        name: '',
        phone: '',
        email: '',
        aggree: false
      },
      msg: '',
      alertType: ''
    }
  },
  $_veeValidate: {
    validator: 'new'
  },
  computed: {
    firstErrorMsg() {
      return this.errors.all()[0]
    }
  },
  methods: {
    validateForm() {
      this.$validator.validateAll().then(result => {
        if (!!result) {
          return this.submitForm()
        } else {
          this.$refs.alert.showAlert(this.firstErrorMsg, 'error')
        }
      })
    },
    submitForm() {
      this.submitProcess = true
      this.$axios
        .$post('', this.formData)
        .then(res => {
          if (!!res) {
            this.submitProcess = false
            this.$refs.alert.showAlert('Data was succesfully sent', 'success')
          }
        })
        .catch(err => {
          this.$refs.alert.showAlert('Server error :(', 'error')
          console.log('server error: ', err)
        })
    }
  }
}
</script>
