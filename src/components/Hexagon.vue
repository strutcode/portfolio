<template>
  <div class="hexagon" :style="computedStyle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 100 100"
    >
      <polygon
        :points="points"
        :fill="fill ? color : 'none'"
        :stroke="color"
        :stroke-width="borderSize"
      />
    </svg>
    <slot />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  const step: number = 1.0472 // 60 degrees in radians

  @Component
  export default class Hexagon extends Vue {
    @Prop({ type: Number, default: 140 })
    size!: number

    @Prop({ type: Number, default: 4 })
    border!: number

    @Prop({ type: Boolean, default: false })
    fill!: boolean

    @Prop({ type: String, default: 'orange' })
    color!: string

    @Prop({ type: Boolean, default: false })
    vertical!: boolean

    get borderSize(): number {
      return this.border / (this.size / 100)
    }

    get points(): string {
      const center: number = 50
      const radius: number = 50 - (this.borderSize / 2)
      const offset = this.vertical ? step / 2 : 0

      const getPoint = (n: number) : string => [
        center + Math.cos(offset + n * step) * radius,
        center + Math.sin(offset + n * step) * radius,
      ].join(',')

      return Array(6).fill(0).map((_, i) => getPoint(i)).join(' ')
    }

    get computedStyle(): object {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    }
  }
</script>

<style lang="sass" scoped>
  .hexagon
    @apply inline-block relative

  svg
    @apply absolute pin w-full h-full
</style>
