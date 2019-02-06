<template>
  <div class="cube" :style="cubeStyle">
    <div class="face top" />
    <div class="face bottom" />
    <div class="face left" />
    <div class="face right" />
    <div class="face front" />
    <div class="face back" />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  // import quat from 'pex-math/quat'
  // import vec3 from 'pex-math/vec3'

  // console.log(quat)

  @Component
  export default class Cube extends Vue {
    w: number = 0

    rotation: number[] = []

    mounted() {
      window.requestAnimationFrame(this.update.bind(this))
    }

    update() {
      this.w += 0.21
      // quat.fromEuler(this.rotation, [this.w, this.w, 0])
      window.requestAnimationFrame(this.update.bind(this))
    }

    get cubeStyle(): object {
      return {
        transform: `rotateX(${this.w}deg) rotateY(${this.w}deg)`,
      }
    }
  }
</script>

<style lang="sass" scoped>
  .cube
    @apply relative
    width: 200px
    height: 200px
    transform-origin: center
    transform-style: preserve-3d
    // animation: spin 10s linear infinite

    .face
      @apply absolute w-full h-full
      border: 1px solid black

      &.top
        transform: rotateX(90deg) translateZ(100px) perspective(600px)
      &.bottom
        transform: rotateX(-90deg) translateZ(100px) perspective(600px)
      &.left
        transform: rotateY(-90deg) translateZ(100px) perspective(600px)
      &.right
        transform: rotateY(90deg) translateZ(100px) perspective(600px)
      &.front
        transform: rotateY(0deg) translateZ(100px) perspective(600px)
      &.back
        transform: rotateY(180deg) translateZ(100px) perspective(600px)

  @keyframes spin
    0%
      transform: rotateX(0deg) rotateY(0deg)
    100%
      transform: rotateX(360deg) rotateY(360deg)
</style>
