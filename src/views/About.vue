<template>
  <div class="about">
    <div class="container content">
      <h1 class="page-title">ABOUT ME</h1>

      <section class="core-values">
        <article v-for="item in coreValues" :key="item.title">
          <Hexagon color="#4dc0b5" vertical>
            <div class="transform-center">Hello World</div>
          </Hexagon>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Hexagon from '@/components/Hexagon.vue'

  const lorem:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  interface CoreValue {
    title: string,
    text: string,
  }

  @Component({
    components: { Hexagon },
  })
  export default class About extends Vue {
    coreValues:CoreValue[] = [
        {
          title: 'Fast',
          text: lorem,
        },
        {
          title: 'Robust',
          text: lorem,
        },
        {
          title: 'Clean',
          text: lorem,
        },
        {
          title: 'Responsive',
          text: lorem,
        },
      ]
  }
</script>

<style lang="sass" scoped>
  $hex: 0.57735

  .core-values
    @apply flex content-between text-center

    p
      @apply text-grey-dark
</style>
