<template>
  <div class="home page">
    <div ref="background" />

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
  import Cubes from '@/scenes/Cubes'

  @Component
  export default class Home extends Vue {
    mounted() {
      const cubes: Cubes = Cubes.init()

      this.$el.replaceChild(
        cubes.engine.getRenderingCanvas() as Node,
        this.$refs.background as Node,
      )

      cubes.engine.resize()
    }
  }
</script>

<style lang="sass" scoped>
  .hero
    @apply absolute pin-l
    bottom: 60%

  .home /deep/ canvas
    @apply absolute pin w-full h-full

  video
    @apply fixed h-full
    opacity: 0.1

  .cta
    @apply transform-center px-12 py-6

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
      width: 80%

    &:after
      height: 60%
</style>
