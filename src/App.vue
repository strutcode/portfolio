<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="name in navItems" :key="name">
          <router-link :to="{ name }">{{name}}</router-link>
        </li>
      </ul>
      <svg class="menu" viewBox="0 0 24 24">
        <path :d="menuIcon" fill="rgba(0, 0, 0, 0.8)" />
      </svg>
    </nav>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mdiMenu } from '@mdi/js'

  @Component
  export default class App extends Vue {
    menuIcon: string = mdiMenu
    navItems: string[] = [
      'Home',
      'About',
      'Work',
      'Contact',
    ]
  }
</script>

<style lang="sass" scoped>
  nav
    @apply fixed pin-t pin-x z-40 bg-white pr-4 shadow
    @apply text-right text-grey-lighter text-xl

    .menu
      @apply m-2
      height: 24px

    &:hover
      ul
        display: block

      .menu
        display: none

    ul
      @apply list-reset
      display: none

      li
        @apply font-heading uppercase

        a
          @apply inline-block py-2 px-4 no-underline

          &.router-link-exact-active
            @apply border-orange border-b-2

  .slide-enter-active
    transition: all 90ms ease-in

  .slide-leave-active
    transition: all 90ms ease-in

  .slide-enter, .slide-leave-to
    @apply opacity-0

  .slide-enter
    top: 25%

  .slide-leave-to
    top: -25%

  @screen md
    nav
      @apply shadow-none

      ul
        display: block

      .menu
        display: none

      li
        @apply inline-block
</style>
