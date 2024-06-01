<script setup>
// Импорт необходимых модулей и компонентов
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CardItem from "./CardItem.vue";

// Получение доступа к хранилищу Vuex
const store = useStore();

// Вычисляемое свойство charactersData, хранящее данные о персонажах
const charactersData = computed(() => {
  return store.state.charactersData;
});

// Хук onMounted, вызывается после монтирования компонента
onMounted(() => {
  // Запуск действия для загрузки данных о персонажах
  store.dispatch("fetchCharactersData");
});
</script>

<template>
  <!-- Компонент контейнера карточек с персонажами -->
  <template v-if="charactersData">
    <div class="cards-container">
      <CardItem
        v-for="character in charactersData.results"
        :key="character.id"
        v-bind:character="character"
      />
    </div>
  </template>

  <template v-if="!charactersData">
    <h1 class="empty-message">Nothing there<span class="empty-message__sad">:(</span></h1>
  </template>
</template>
