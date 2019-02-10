<template>
  <div class="work page">
    <div class="container content">
      <div class="work-carousel">
        <transition name="rotate">
          <div class="item" :key="currentEntry.url">
            <div class="graphic">
              <div class="image">
                <img :src="currentEntry.img" />
              </div>
            </div>
            <div class="info">
              <div v-html="currentEntry.info" />
              <a
                :href="currentEntry.url"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit the Site
              </a>
            </div>
          </div>
        </transition>
        <button class="prev" @click="prev">&larr;</button>
        <button class="next" @click="next">&rarr;</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  interface Entry {
    img: string,
    info: string,
    url: string,
  }

  @Component
  export default class Work extends Vue {
    index: number = 0

    /* eslint-disable global-require */
    entries: Entry[] = [
      {
        url: 'http://work-here.jetblue.com/',
        img: require('@/assets/work/jet-blue.jpg'),
        info: require('@/assets/work/jet-blue.md'),
      },
      {
        url: 'http://www.anaturalchef.com/',
        img: require('@/assets/work/a-natural-chef.jpg'),
        info: require('@/assets/work/a-natural-chef.md'),
      },
      {
        url: 'http://www.somethingfab.com/',
        img: require('@/assets/work/something-fabulous.jpg'),
        info: require('@/assets/work/something-fabulous.md'),
      },
      {
        url: 'http://www.balichildrensproject.org/',
        img: require('@/assets/work/bali-childrens-project.jpg'),
        info: require('@/assets/work/bali-childrens-project.md'),
      },
      {
        url: 'http://www.rondoutvalleygrowers.org/',
        img: require('@/assets/work/rondout-valley-growers.jpg'),
        info: require('@/assets/work/rondout-valley-growers.md'),
      },
    ]

    get currentEntry() {
      return this.entries[this.index]
    }

    prev(): void {
      this.index--

      if (this.index < 0) {
        this.index += this.entries.length
      }
    }

    next(): void {
      this.index++

      if (this.index >= this.entries.length) {
        this.index -= this.entries.length
      }
    }
  }
</script>


<style lang="sass" scoped>
  .content
    @apply pt-16

  .work-carousel
    button
      @apply fixed bg-grey text-white py-12 px-2
      top: 50%
      transform: translateY(-50%)

      &.prev
        @apply pin-l

      &.next
        @apply pin-r

  .work-grid
    @apply flex flex-wrap

    & > div
      @apply w-full p-4

  .item
    @apply bg-white

    .graphic
      @apply -mx-8

      .image
        @apply relative overflow-hidden

        &:before
          @apply psuedo-block
          padding-top: 56.25%

        img
          @apply block absolute pin-t pin-l

    & /deep/ .info
      @apply my-12 px-4

      h2, h3
        @apply text-grey-darker

      h3
        @apply mt-4

      ul
        @apply my-4

        li
          @apply text-grey-darker p-1

      a
        @apply inline-block py-4 px-12 mt-8
        @apply rounded shadow
        @apply bg-teal text-white no-underline font-semibold

        &:hover
          @apply opacity-90

  .rotate-enter-active
    transition: all 180ms ease-in

  .rotate-leave-active
    transition: all 180ms ease-in

  .rotate-enter, .rotate-leave-to
    @apply opacity-0
    transform-origin: center right 600px

  .rotate-leave-to
    transform: perspective(1600px) rotateY(60deg)

  .rotate-enter
    transform: perspective(1600px) rotateY(-60deg)

  @screen md
    .content
      padding-top: 10%

    .work-carousel
      button
        @apply px-4

    .item
      @apply absolute flex bg-white

      .graphic
        @apply mx-0
        flex: 0 0 50%

        .image
          @apply shadow-lg rounded
          transform: perspective(1000px) rotateY(15deg)

          &:before
            padding-top: 100%

        .info
          @apply mt-0 pl-12
</style>
