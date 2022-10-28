<template>
  <header>
    <RouterLink to="/"><h1>Animal Crossing Wiki</h1></RouterLink>
    <div class="navbar">
      <RouterLink to="/fish">Fish</RouterLink>
      <RouterLink to="/sea-creatures">Sea Creatures</RouterLink>
      <RouterLink to="/bugs">Bugs</RouterLink>
      <RouterLink to="/fossils">Fossils</RouterLink>
      <RouterLink to="/villagers">Villagers</RouterLink>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-around
  margin: 25px
  h1
    font-family: SansSerif
    font-size: 35px
    font-weight: 900
    color: mediumseagreen
    -webkit-text-stroke: 1px black
  a
    text-decoration: none

.navbar
  font-size: 20px
  a
    font-family: SansSerif
    color: crimson
    margin-left: 15px
    &:hover
      color: cornflowerblue
</style>