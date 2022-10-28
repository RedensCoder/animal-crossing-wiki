<template>
  <div class="wrapper">
    <Header/>
    <h3>Villagers</h3>
    <Search @search_people="search_value"/>
    <div class="wrapper__filter">
      <button @click="gender = ''" class="filter__button">All Gender</button>
      <button @click="gender = 'Male'" class="filter__button">Male</button>
      <button @click="gender = 'Female'" class="filter__button">Female</button>
    </div>
    <div class="wrapper__fishs">
      <div  class="wrapper__fish" v-for="fish in Villagers.villagers" :key="fish.id">
        <div v-if="fish.gender === gender && search_val === ''" class="fish__fish">
          <img :src=fish.icon_uri alt="fish" />
          <p class="fish__name">{{fish.name["name-EUru"]}}</p>
          <p class="fish__gender">{{fish.gender}}</p>
        </div>

        <div v-if="gender === '' && search_val === ''" class="fish__fish">
          <img :src=fish.icon_uri alt="fish" />
          <p class="fish__name">{{fish.name["name-EUru"]}}</p>
          <p class="fish__gender">{{fish.gender}}</p>
        </div>

        <div v-if="search_val === fish.name['name-EUru']" class="fish__fish">
          <img  :src=fish.icon_uri alt="fish" />
          <p v-if="search_val === fish.name['name-EUru']">{{fish.name["name-EUru"]}}</p>
          <p v-if="search_val === fish.name['name-EUru']">{{fish.gender}}</p>
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

const Villagers = useAllFetchStore();

const gender = ref("");
const search_val = ref("");

onMounted(() => {
  Villagers.Villagers();
})

const search_value = (search_people) => {
  search_val.value = search_people;
}
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