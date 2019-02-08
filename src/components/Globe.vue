<template>
  <div class="globe">
    <div class="point" v-for="point in points" :style="pointStyle(point)" />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class Globe extends Vue {
    get points() {
      const stepx = 360 / 32
      const stepy = 90 / 16
      const res = []

      for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 32; x++) {
          res.push({
            y: stepy * y,
            x: stepx * x,
          })
        }
      }

      return res
    }

    t = 0

    mounted() {
      setInterval(() => (this.t += 0.1), 1000 / 60)
    }

    pointStyle(point) {
      return {
        transform: `perspective(2000px) rotateY(${point.x + this.t}deg) rotateX(${point.y}deg)`,
      }
    }
  }
</script>


<style lang="sass" scoped>
  .line
    @apply fixed pin-b w-32 h-32 border-red border z-30
    transform-origin: center center -300px
    transition: all 1s linear
    transform: perspective(600px) rotateY(0deg) rotateX(0deg)

  .globe
    @apply fixed pin-b pin-l

  .point
    @apply absolute w-4 h-4 rounded-full bg-red
    transform-origin: center center -600px
    backface-visibility: hidden
    transform-style: preserve-3d
    transition: all 1s linear

    &:before, &:after
      content: ''
      display: block
      position: absolute
      width: 120px
      height: 4px
      background: orange

    &:after
      width: 60px
      transform-origin: center left
      transform: rotateZ(90deg)
</style>
