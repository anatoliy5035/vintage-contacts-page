<template>
  <div class="c-page-layout">
    <contacts-info />
    <contacts-map />
    <contacts-us />
  </div>
</template>

<script>
import ContactsInfo from '~/components/ContactsInfo'
import ContactsMap from '~/components/ContactsMap'
import ContactsUs from '~/components/ContactsUs'

export default {
  components: {
    ContactsInfo,
    ContactsMap,
    ContactsUs
  }
}
</script>
