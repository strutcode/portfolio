<template>
  <div class="home page">
    <div class="container content">
      <div class="hero">
        <h1>Expertise to turn ideas into elegant code.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <button class="cta">
        <h3>LEARN MORE</h3>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
  @import "~@/styles/custom-utilities"

  .hero
    @apply absolute pin-l
    bottom: 60%

  .cta
    @apply transform-center px-8 py-3

    &:before, &:after
      content: ''
      @apply transform-center w-full h-full
      @apply border border-grey-darker
      transition: all 120ms ease-out

    &:hover
      &:before, &:after
        width: 100%
        height: 100%

    &:before
      width: 120%

    &:after
      height: 140%
</style>
