<template>
  <div class="search">
    <input
        class="search__input"
        placeholder="Enter your request..."
        autocomplete="off"
        v-model="value"
        @input="search"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";

const value = ref("");

const emit = defineEmits(["search_people"]);

const search = () => {
  emit("search_people", value.value);
}

</script>

<style lang="sass" scoped>
.search__input
  font-size: 20px
  font-family: sans-serif
  padding: 10px
  border: 1px black solid
  border-radius: 10px
  margin: 15px 0
</style>