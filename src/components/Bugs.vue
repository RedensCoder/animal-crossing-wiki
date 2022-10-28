<template>
  <div class="wrapper">
    <Header/>
    <h3>BUGS</h3>
    <Search @search_people="search"/>
    <div class="wrapper__filter">
      <button @click="rarity = ''" class="filter__button">All Rarity</button>
      <button @click="rarity = 'Common'" class="filter__button">Common</button>
      <button @click="rarity = 'Uncommon'" class="filter__button">Uncommon</button>
      <button @click="rarity = 'Rare'" class="filter__button">Rare</button>
      <button @click="rarity = 'Ultra-rare'" class="filter__button">Ultra-Rare</button>
    </div>
    <div class="wrapper__fishs">
      <div class="wrapper__fish" v-for="fish in Bugs.bugs" :key="fish.id">
        <div v-if="fish.availability.rarity === rarity && search_value === ''" class="fish__fish">
          <img :src=fish.icon_uri alt="fish" />
          <p class="fish__name">{{fish.name["name-EUru"]}}</p>
          <p class="fish__price">Цена: {{fish.price}}</p>
          <p class="fish__rarity">{{fish.availability.rarity}}</p>
        </div>

        <div v-if="rarity === '' && search_value === ''" class="fish__fish">
          <img :src=fish.icon_uri alt="fish" />
          <p class="fish__name">{{fish.name["name-EUru"]}}</p>
          <p class="fish__price">Цена: {{fish.price}}</p>
          <p class="fish__rarity">{{fish.availability.rarity}}</p>
        </div>

        <div v-if="search_value === fish.name['name-EUru']" class="fish__fish">
          <img :src=fish.icon_uri alt="fish" />
          <p class="fish__name">{{fish.name["name-EUru"]}}</p>
          <p class="fish__price">Цена: {{fish.price}}</p>
          <p class="fish__rarity">{{fish.availability.rarity}}</p>
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

const Bugs = useAllFetchStore();

const rarity = ref("");
const search_value = ref("");

const search = (search_v) => {
  search_value.value = search_v;
}

onMounted(() => {
  Bugs.Bugs();
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

.filter__button
  margin-top: 15px
  background: cornflowerblue
  color: white
  padding: 10px 45px
  margin-left: 20px
  cursor: pointer
</style>