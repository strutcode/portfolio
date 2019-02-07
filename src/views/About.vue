<template>
  <div class="about">
    <div class="container content">
      <h1 class="page-title">CORE TENETS</h1>

      <section class="core-values">
        <article v-for="item in coreValues" :key="item.title">
          <Hexagon color="#4dc0b5" vertical>
            <Hexagon class="transform-center" :size="80" color="#4dc0b5" vertical fill>
              <!-- <img class="transform-center icon" src="@mdi/svg/svg/speedometer.svg" /> -->
              <!-- <div v-html="require('@mdi/svg/svg/speedometer.svg!raw-loader')" /> -->
              <svg class="transform-center icon" viewBox="0 0 24 24">
                <path :d="item.icon" fill="#fff" />
              </svg>
            </Hexagon>
          </Hexagon>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
          <!-- <div class="tenet">
            <div class="title">
              <h2>{{ item.title }}</h2>
            </div>
            <p>{{ item.text }}</p>
          </div> -->
        </article>
      </section>

      <div class="columns">
        <section class="personal">
          <img />
          <b>About me</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent tincidunt tempus dui eu posuere. Curabitur sed metus
            vitae neque viverra iaculis ac vel nisi. Donec eu felis non ligula
            euismod mollis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Morbi vel enim semper, facilisis metus vel, mollis dui. Nam
            aliquet tincidunt mi, et vulputate sapien maximus in. Vivamus ex
            neque, finibus a condimentum id, scelerisque sed velit.
          </p>
          <p>
            Aliquam in risus et augue dapibus auctor eu at metus. Quisque sit
            amet sodales nisl. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Donec mattis eget erat id tempus. Aenean ut sodales
            felis. Morbi mollis dolor felis, facilisis hendrerit tellus
            faucibus ut. Vivamus hendrerit tristique dui ut ultricies. Nunc
            pellentesque arcu vel magna lacinia dignissim. Integer a elit nec
            ante molestie cursus ac sit amet massa. Integer mi nisi, mollis ac
            placerat in, volutpat quis ex. Cras cursus aliquam ex at commodo.
            Morbi a molestie ipsum. Morbi aliquet nisl ut semper ullamcorper.
            Sed hendrerit efficitur metus, nec euismod elit mattis at. Nam non
            sodales velit. Suspendisse commodo orci odio, id rutrum diam
            imperdiet non.
          </p>
        </section>

        <section class="confidences">
          <div class="row" v-for="(percent, item) in confidences" :key="item">
            <div class="title">{{ item }}</div>
            <div class="bar">
              <div class="filled" :style="{ width: percent + '%' }" />
              <span>{{ percent }}%</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import {
    mdiSpeedometer, mdiWall, mdiImageFilterHdr, mdiBookOpenPageVariant,
  } from '@mdi/js'
  import Hexagon from '@/components/Hexagon.vue'

  const lorem:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  interface CoreValue {
    title: string,
    text: string,
    icon: string,
  }

  @Component({
    components: { Hexagon },
  })
  export default class About extends Vue {
    coreValues:CoreValue[] = [
      {
        title: 'Speed',
        text: lorem,
        icon: mdiSpeedometer,
      },
      {
        title: 'Reliability',
        text: lorem,
        icon: mdiWall,
      },
      {
        title: 'Aesthetic',
        text: lorem,
        icon: mdiImageFilterHdr,
      },
      {
        title: 'Readability',
        text: lorem,
        icon: mdiBookOpenPageVariant,
      },
    ]

    confidences = {
      Vue: 100,
      React: 80,
      ES5: 100,
      ES6: 90,
      Typescript: 50,
      HTML: 100,
      Pug: 70,
      CSS: 70,
      Sass: 80,
      Less: 50,
      Node: 60,
      Ruby: 80,
      Rails: 40,
      Design: 50,
      UX: 70,
    }
  }
</script>

<style lang="sass" scoped>
  $hex: 0.57735

  .core-values
    @apply flex content-between text-center

    .icon
      width: 36px
      height: 36px
      fill: white

    .tenet
      @apply border-teal mx-8 p-4
      border-width: 3px

      .title
        @apply relative border-teal bg-white p-2 my-4
        border-width: 3px
        width: 140%
        left: 50%
        transform: translateX(-50%)

  .columns
    @apply flex w-full mt-12

  .personal
    flex: 0 1 35%

    img
      @apply rounded-full bg-grey-lighter float-right m-4
      width: 150px
      height: 150px

  .confidences
    @apply flex-grow ml-12

    .row
      @apply flex rounded overflow-hidden mb-2

      .title
        @apply bg-teal py-2 font-heading text-center
        color: rgba(255, 255, 255, 0.8)
        flex: 0 0 8em

      .bar
        @apply relative flex-grow bg-grey-lighter text-center

        .filled
          @apply absolute h-full bg-teal
          opacity: 0.4

        span
          @apply transform-center
</style>
