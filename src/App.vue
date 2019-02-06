<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="name in navItems" :key="name">
          <router-link :to="{ name }">{{name}}</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class App extends Vue {
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
    @apply fixed pin-t pin-x z-40
    @apply text-right text-grey-lighter text-xl

    &.solid
      @apply bg-grey-darker

    ul
      @apply list-reset

      li
        @apply inline-block
        @apply font-heading uppercase

        a
          @apply inline-block py-2 px-4

          &.router-link-exact-active
            @apply border-orange border-b-2
</style>
