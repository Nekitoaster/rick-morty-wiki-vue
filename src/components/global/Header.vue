<script setup>
// Импорт необходимых модулей и компонентов
import { ref, reactive, computed } from "vue";
import SearchIcon from "../icons/SearchIcon.vue";
import { useStore } from "vuex";

// Получение доступа к хранилищу Vuex
const store = useStore();

const charactersData = computed(() => {
  return store.state.charactersData;
});

// Объявление реактивных переменных для хранения значений полей формы
const nameQuery = ref("");
const statusQuery = ref("");

// Создание реактивного объекта queryParams для хранения параметров запроса
const queryParams = reactive({ name: "", status: "" });

// Функция обработки отправки формы
const submit = () => {
  // Обновление значений в объекте queryParams и в хранилище Vuex
  queryParams.name = nameQuery.value;
  store.commit("SET_NAME_QUERY", nameQuery.value);
  queryParams.status = statusQuery.value;
  store.commit("SET_STATUS_QUERY", statusQuery.value);
  store.commit("SET_PAGE_QUERY", 1);

  // Вызов действия для загрузки данных с передачей параметров запроса
  store.dispatch("fetchCharactersData", queryParams);
};
</script>

<template>
  <!-- Компонент шапки -->
  <header>
    <form @submit.prevent.stop="submit">
      <div class="input-element">
        <label for="name">name</label>
        <input
          type="text"
          v-model="nameQuery"
          id="name"
          placeholder="example: Rick"
        />
      </div>
      <div class="input-element">
        <label class="select-label" for="status">status</label>
        <select v-model="statusQuery" name="status" id="status">
          <option value="">All</option>
          <option value="unknown">Unknown</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
        </select>
      </div>
      <button type="submit"><SearchIcon /></button>
    </form>
  </header>
</template>
