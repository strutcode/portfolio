<template>
  <div class="about">
    <div class="container content">
      <h1 class="page-title">ABOUT ME</h1>

      <section class="core-values">
        <article v-for="item in coreValues" :key="item.title">
          <div class="hexagon"></div>
          <h1>{{ item.title }}</h1>
          <p>{{ item.text }}</p>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  export default {
    data: () => ({
      coreValues: [
        {
          title: 'Robust',
          text: lorem,
        },
        {
          title: 'Responsive',
          text: lorem,
        },
        {
          title: 'Clean',
          text: lorem,
        },
        {
          title: 'Consistent',
          text: lorem,
        },
      ],
    }),
  }
</script>

<style lang="sass" scoped>
  $hex: 0.57735

  .core-values
    @apply flex content-between text-center

  .hexagon
    @apply block relative bg-teal mx-auto
    height: 140px
    width: 140px * $hex

    &:before, &:after
      content: ''
      @apply absolute pin bg-teal
      transform-origin: center

    &:before
      transform: rotate(60deg)

    &:after
      transform: rotate(-60deg)
</style>
