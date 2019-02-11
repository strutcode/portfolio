<template>
  <div class="form-field">
    <label :for="uid">
      <slot />
      <span v-if="required" class="text-red">*</span>
    </label>

    <textarea
      v-if="type === 'textarea'"
      :name="name"
      :id="uid"
      v-validate="validate"
      v-model="proxy"
      v-bind="$attrs"
    />
    <input
      v-else
      :name="name"
      :id="uid"
      v-validate="validate"
      v-model="proxy"
      v-bind="$attrs"
    />

    <div class="error">{{ errors.first(name) }}</div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  const cheapUid = () => (Math.random() * (2 ** 63)).toString(36) + Date.now().toString(36)

  @Component
  export default class FormField extends Vue {
    @Prop({ type: String, default: 'text' })
    type!: string

    @Prop({ type: String })
    name!: string

    @Prop({ type: String, default: '' })
    value!: string

    @Prop({ type: String, default: null })
    validate!: string

    uid: string = cheapUid()

    get required() {
      return this.validate && this.validate.match(/required/)
    }

    get proxy() {
      return this.value
    }

    set proxy(value) {
      this.$emit('input', value)
    }
  }
</script>

<style lang="sass" scoped>
  .form-field
    @apply my-4
</style>
