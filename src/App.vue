<script>
    import AppMain from './components/AppMain.vue';
    import AppSearch from './components/AppSearch.vue';
    import AppHeader from './components/AppHeader.vue';
    export default {
      components: {
        AppHeader,
        AppMain,
        AppSearch
      }
    }
</script>

<template>
  <AppHeader/>
  <AppSearch/>
  <AppMain/>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
</style>
