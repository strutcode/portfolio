<template>
  <div class="home page">
    <div ref="background" />

    <div class="container content">
      <div class="hero">
        <h1>Expertise to turn outstanding ideas into elegant code.</h1>
        <p>
          I use web technologies to help build stronger businesses and better
          user experiences.
        </p>
      </div>

      <button class="cta" @click="$router.push({ name: 'About' })">
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
      this.initBackground()
    }

    initBackground() {
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
    @apply opacity-10

  .cta
    @apply transform-center px-12 py-6

    h3
      position: relative

    &:before, &:after
      @apply psuedo-block transform-center w-full h-full
      @apply border border-grey-darker
      transition: all 70ms ease-out
      background: rgba(255, 255, 255, 0.5)
      z-index: -1

    &:hover
      &:before, &:after
        @apply w-full h-full

    &:before
      @apply w-4/5

    &:after
      @apply h-3/5
</style>
