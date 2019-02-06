<template>
  <div class="contact page">
    <div class="container content">
      <div class="contact-form">
        <form @submit.prevent="">
          <FormField>Title</FormField>
          <FormField type="textarea">Message</FormField>
          <button>Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import FormField from '@/components/FormField.vue'

  @Component({
    components: { FormField },
  })
  export default class Contact extends Vue {
  }
</script>

<style lang="sass" scoped>
  .contact-form
    @apply transform-center p-8
    @apply rounded overflow-hidden shadow-lg
</style>
