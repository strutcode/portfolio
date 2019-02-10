<template>
  <div class="about page">
    <div class="container content">
      <h1 class="tenets">CORE TENETS</h1>

      <section class="core-values">
        <article v-for="item in coreValues" :key="item.title">
          <Hexagon color="#22A4B5" vertical>
            <Hexagon class="transform-center" :size="80" :border="0" color="#22A4B5" vertical fill>
              <svg class="transform-center icon" viewBox="0 0 24 24">
                <path :d="item.icon" fill="#fff" />
              </svg>
            </Hexagon>
          </Hexagon>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </section>

      <div class="columns">
        <section class="personal">
          <img src="@/assets/me.png" />
          <h3>About me</h3>
          <p>
            From a very young age I have been fascinated by computers, seeing
            them as technological wonder and striving to understand all of their
            inner workings. I began with HTML and CSS, later graduating to C,
            C++, x86 Assembly and others. That pursuit continues even today as I
            learn emerging technologies like serverless architecture and machine
            learning.
          </p>

          <p>
            Still the internet and the languages that power it hold the most
            sway for me. The majority of my time is spent writing code in and
            keeping up with trends in HTML, CSS, Javascript and all of their
            many variants and supersets. I am intimately familiar with all of
            the major frameworks and utilities in that space and continue to
            explore new options as they appear, occassionally even contributing
            to an up and coming tool.
          </p>

          <p>
            I am an experienced freelancer and always open to new opportunities.
            If my skills sound like a good fit for you then
            <router-link :to="{ name: 'Contact' }">let's talk</router-link>!
          </p>
        </section>

        <section class="confidences">
          <h3 class="mb-4">Confidences</h3>
          <div class="row" v-for="[item, percent] in confidencesShort" :key="item">
            <div class="title">{{ item }}</div>
            <div class="bar">
              <div class="filled" :style="{ width: percent + '%' }" />
              <span>{{ percent / 10 }}/10</span>
            </div>
          </div>
          <!-- <button class="see-more">See More</button> -->
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import {
    mdiSpeedometer, mdiWall, mdiImageFilterHdr, mdiCodeTagsCheck,
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
        text: 'Fast load times and no hiccups. Responsiveness is paramount to user experience.',
        icon: mdiSpeedometer,
      },
      {
        title: 'Reliability',
        text: 'Automated testing and good practices ensure the fewest possible hangups.',
        icon: mdiWall,
      },
      {
        title: 'Aesthetic',
        text: 'Clean design and clean code makes easy reading for users and developers.',
        icon: mdiImageFilterHdr,
      },
      {
        title: 'Compatability',
        text: 'It should just work, no matter what device or browser the user chooses.',
        icon: mdiCodeTagsCheck,
      },
    ]

    confidences: [string, number][] = [
      ['Webpack', 80],
      ['Vue', 100],
      ['React', 80],
      ['ES5', 100],
      ['ES6', 90],
      ['Typescript', 60],
      ['HTML', 100],
      ['Pug', 70],
      ['CSS', 70],
      ['Sass', 80],
      ['Less', 50],
      ['Node', 60],
      ['Ruby', 80],
      ['Design', 50],
      ['UX', 70],
      ['Ruby on Rails', 40],
    ]

    get confidencesShort() {
      return this.confidences.slice(0, 10)
    }
  }
</script>

<style lang="sass" scoped>
  .tenets
    @apply w-1/2 border-b-2 border-grey-darker text-center mx-auto mt-12

  .core-values
    @apply text-center

    article
      @apply mt-12

    .icon
      width: 36px
      height: 36px
      fill: white

  .personal, .confidences
    @apply mt-12

  .personal
    img
      @apply rounded-full bg-grey-lighter float-right m-4 border-4 border-teal
      width: 150px
      height: 150px

  .confidences
    .row
      @apply flex rounded overflow-hidden mb-2

      .title
        @apply bg-teal py-2 font-heading text-center text-white
        flex: 0 0 8em

      .bar
        @apply relative flex-grow bg-grey-lighter text-center

        .filled
          @apply absolute h-full bg-teal
          @apply opacity-40

        span
          @apply transform-center

    .see-more
      @apply block w-full rounded bg-grey-light p-4
      @apply text-center text-black font-semibold

      &:hover
        @apply opacity-90

  @screen md
    .core-values
      @apply flex justify-between content-between

      article
        @apply w-1/5

  @screen lg
    .columns
      @apply flex w-full

    .personal
      flex: 0 1 35%

    .confidences
      @apply flex-grow ml-12
</style>
