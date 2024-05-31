<script setup>
import axios from "axios";
import { onBeforeMount, onMounted, ref } from "vue";

const props = defineProps(["character"]);
const lastSeen = ref({});

onMounted(async () => {
  try {
    const response = await axios.get(props.character.episode[0]);
    lastSeen.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="card-item-container">
    <div class="card-item-container__img-container">
      <img class="img-container__img" :src="character.image" :alt="character.name" />
    </div>
    <div class="card-item-container__description-container">
      <h2 class="description-container__name">{{ character.name }}</h2>
      <div class="description-container__desc-item">
        <span
          class="desc-item__circle"
          v-bind:class="{
            'red-bcg': character.status === 'Dead',
            'green-bcg': character.status === 'Alive',
            'gray-bcg': character.status === 'unknown',
          }"
        ></span>
        <p>{{ character.status }} - {{ character.species }}</p>
      </div>
      <p class="description-container__desc-head">Last known location:</p>
      <p class="description-container__desc-body">
        {{ character.location.name }}
      </p>
      <p class="description-container__desc-head">First seen in:</p>
      <p class="description-container__desc-body">{{lastSeen.name}}</p>
    </div>
  </div>
</template>
