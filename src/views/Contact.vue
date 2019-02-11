<template>
  <div class="contact page">
    <div class="container content">
      <div class="contact-form">
        <p class="mt-0">
          Fill out the form below to send me an e-mail. Please ensure that you
          enter a valid email address to receive a response.
        </p>
        <form @submit.prevent="sendMessage">
          <FormField
            name="email"
            validate="required|email"
            v-model="email"
          >
            Reply To
          </FormField>

          <FormField
            name="title"
            validate="required"
            v-model="title"
          >
            Title
          </FormField>

          <FormField
            name="message"
            type="textarea"
            validate="required"
            v-model="message"
          >
            Message
          </FormField>

          <button>Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import axios from 'axios'
  import FormField from '@/components/FormField.vue'

  @Component({
    components: { FormField },
  })
  export default class Contact extends Vue {
    email: string = ''
    title: string = ''
    message: string = ''

    async sendMessage() {
      // Contruct a Google Forms url for submission
      await axios.get(
        'https://docs.google.com/forms/d/e/1FAIpQLSemsQqdV3oh1dceOvudl2w03qHkGA_zmJZdAt4sBe-zJlrdJA/formResponse',
        {
          params: {
            ifq: '',
            submit: 'Submit',
            'entry.1544901689': this.email,
            'entry.591775328': this.title,
            'entry.1380670021': this.message,
          },
        },
      )
    }
  }
</script>

<style lang="sass" scoped>
  .contact-form
    @apply transform-center p-8 w-full
    @apply rounded overflow-hidden border-4 border-teal

    & /deep/ label
      @apply block font-heading mb-2 mt-4 font-semibold

  button
    @apply rounded bg-orange py-3 px-12 shadow text-white

    &:hover
      @apply opacity-90

  @screen md
    .contact-form
      @apply w-1/2
</style>
