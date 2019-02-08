<template>
  <div class="work page">
    <div class="container content">
      <div class="work-grid">
        <div v-for="i in 9" :key="i">
          <a href="#" class="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .content
    padding-top: 10%

  .work-grid
    @apply flex flex-wrap

    & > div
      @apply w-full p-4

      .item
        @apply block bg-grey-light

        &:before
          content: ''
          display: block
          padding-top: 56.25%

  @screen md
    .work-grid > div
      @apply w-1/2

  @screen lg
    .work-grid > div
      @apply w-1/3
</style>
