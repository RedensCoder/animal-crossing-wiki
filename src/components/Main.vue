<template>
  <Header/>
  <div class="wrapper">
    <h3>GLOBAL</h3>
    <Search @search_people="search" />
    <div class="wrapper__fishs">
      <div class="wrapper__fish" v-for="al in All.all" :key="al">
        <div class="fish__fish" v-for="all in al" :key="all.id">
          <div class="fish__fish__fish" v-if="search_value === all.name['name-EUru']">
            <img :src="all.image_uri" alt="icon" class="fish__icon">
            <p class="fish__name">{{all.name["name-EUru"]}}</p>
          </div>
          <div class="fish__fish__fish" v-if="search_value === ''">
            <img :src="all.image_uri" alt="icon" class="fish__icon">
            <p class="fish__name">{{all.name["name-EUru"]}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Search from "@/components/Search.vue";
import {useAllFetchStore} from "@/stores/AllFetch";
import {onMounted, ref} from "vue";

const All = useAllFetchStore();

const search_value = ref("");

const search = (search_v) => {
  search_value.value = search_v;
}

onMounted(() => {
  All.Fish();
  All.SeaCreatures();
  All.Bugs();
  All.Fossils();
  All.Villagers();
});
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
  margin: 50px
  .fish__name
    font-weight: 700

.wrapper__fish
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr

.fish__fish__fish
  margin: 20px

.filter__button
  margin-top: 15px
  background: cornflowerblue
  color: white
  padding: 10px 45px
  margin-left: 20px
  cursor: pointer

.fish__icon
  max-width: 20%
</style>