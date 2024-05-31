<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CardItem from "./CardItem.vue";

const store = useStore();
const charactersData = computed(() => {
  return store.state.charactersData;
});

onMounted(() => {
  store.dispatch("fetchCharactersData");
});
</script>

<template>
  <div class="cards-container">
    <CardItem
      v-for="character in charactersData.results"
      :key="character.id"
      v-bind:character="character"
    />
  </div>
</template>
