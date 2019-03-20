<template>
  <div v-show="isShow" class="c-alert" :class="alertClass">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      isShow: false,
      variant: '',
      msg: ''
    }
  },
  computed: {
    alertClass() {
      return this.variant === 'error' ? 'c-alert-error' : 'c-alert-success'
    }
  },
  watch: {
    isShow(newVal, oldVal) {
      if (oldVal !== newVal) {
        setTimeout(() => {
          this.isShow = false
        }, 3000)
      }
    }
  },
  methods: {
    showAlert(data, variant) {
      console.log(variant)
      this.msg = data
      this.variant = variant
      this.isShow = true
    }
  }
}
</script>
