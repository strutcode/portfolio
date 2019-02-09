<template>
  <div class="work page">
    <div class="container content">
      <div class="work-carousel">
        <div class="item" v-for="entry in entries" :key="entry.title">
          <div class="graphic">
            <div class="image">
              <img :src="entry.img" />
            </div>
          </div>
          <div class="info">
            <div v-html="entry.info" />
            <button>Visit the Site</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  interface Entry {
    img: string,
    info: string,
  }

  @Component
  export default class Work extends Vue {
    /* eslint-disable global-require */
    entries: Entry[] = [
      {
        img: require('@/assets/jet-blue.jpg'),
        info: require('@/assets/jet-blue.md'),
      },
      {
        img: require('@/assets/a-natural-chef.jpg'),
        info: require('@/assets/a-natural-chef.md'),
      },
      {
        img: require('@/assets/something-fabulous.jpg'),
        info: require('@/assets/something-fabulous.md'),
      },
      {
        img: require('@/assets/bali-childrens-project.jpg'),
        info: require('@/assets/bali-childrens-project.md'),
      },
      {
        img: require('@/assets/rondout-valley-growers.jpg'),
        info: require('@/assets/rondout-valley-growers.md'),
      },
    ]
  }
</script>


<style lang="sass" scoped>
  .content
    padding-top: 10%

  .work-carousel
    // @apply transform-center

  .work-grid
    @apply flex flex-wrap

    & > div
      @apply w-full p-4

  .item
    @apply absolute flex bg-white

    .graphic
      flex: 0 0 50%

      .image
        @apply relative overflow-hidden shadow-lg
        transform: perspective(1000px) rotateY(15deg)

        &:before
          @apply block
          content: ''
          padding-top: 100%

        img
          @apply block absolute pin-t pin-l

    & /deep/ .info
      @apply pl-12

      h2, h3
        @apply text-grey-darker

      h3
        @apply mt-4

      ul
        @apply my-4

        li
          @apply text-grey-darker p-1

      button
        @apply bg-teal py-4 px-12 mt-8 text-grey-lightest rounded shadow

  // @screen md
  //   .work-grid > div
  //     @apply w-1/2

  // @screen lg
  //   .work-grid > div
  //     @apply w-1/3
</style>
