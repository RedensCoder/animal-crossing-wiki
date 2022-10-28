<template>
  <div class="wrapper">
    <Header/>
    <h3>SEA CREATURES</h3>
    <Search @search_people="search"/>
    <div class="wrapper__fishs">
      <div class="wrapper__fish" v-for="sea in SeaCreatures.sea_creatures" :key="sea.id">
        <div v-if="search_value === sea.name['name-EUru']" class="fish__fish">
          <img :src=sea.icon_uri alt="fish" />
          <p class="fish__name">{{sea.name["name-EUru"]}}</p>
          <p class="fish__price">Цена: {{sea.price}}</p>
        </div>

        <div v-else-if="search_value === ''" class="fish__fish">
          <img :src=sea.icon_uri alt="fish" />
          <p class="fish__name">{{sea.name["name-EUru"]}}</p>
          <p class="fish__price">Цена: {{sea.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useAllFetchStore} from "@/stores/AllFetch";
  import {onMounted, ref} from "vue";

  import Header from "./Header.vue";
  import Search from "@/components/Search.vue";

  const SeaCreatures = useAllFetchStore();
  const search_value = ref("");

  const search = (search_people) => {
    search_value.value = search_people;
  }

  onMounted(() => {
    SeaCreatures.SeaCreatures();
  })
</script>

<style lang="sass" scoped>
.wrapper
  text-align: center
  font-family: sans-serif
  h3
    font-size: 30px
    color: cornflowerblue

.wrapper__fish
  font-size: 20px
  margin-bottom: 50px
  .fish__name
    font-weight: 700

.wrapper__fishs
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  margin-top: 25px
</style>