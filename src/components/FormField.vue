<template>
  <div class="form-field">
    <label :for="uid"><slot /></label>
    <textarea v-if="type === 'textarea'" />
    <input v-else v-bind="$attrs" :id="uid" />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  const cheapUid = () => (Math.random() * (2 ** 63)).toString(36) + Date.now().toString(36)

  @Component
  export default class Hexagon extends Vue {
    @Prop({ type: String, default: 'text' })
    type!: string

    uid: string = cheapUid()
  }
</script>

<style lang="sass" scoped>
  .form-field
    @apply my-4
</style>
