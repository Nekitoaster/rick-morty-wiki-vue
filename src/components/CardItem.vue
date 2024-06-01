<script setup>
// Импорт необходимых модулей и функций
import axios from "axios";
import { onMounted, ref } from "vue";

// Получение свойств компонента
const props = defineProps(["character"]);

// Инициализация реактивной переменной для хранения информации о первом появлении
const firstSeen = ref({});

// Хук onMounted, вызывается после монтирования компонента
onMounted(async () => {
  try {
    // Запрос к API для получения информации о первом появлении персонажа
    const response = await axios.get(props.character.episode[0]);
    // Обновление значения firstSeen с данными о первом появлении
    firstSeen.value = response.data;
  } catch (error) {
    // Обработка ошибки при запросе
    console.log(error);
  }
});
</script>

<template>
  <!-- Комопнент карточки персонажа -->
  <div class="card-item-container">
    <div class="card-item-container__img-container">
      <img
        class="img-container__img"
        :src="character.image"
        :alt="character.name"
      />
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
      <p class="description-container__desc-body">{{ firstSeen.name }}</p>
    </div>
  </div>
</template>
