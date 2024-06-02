<script setup>
// Импорт необходимых модулей и компонентов
import { computed, reactive } from "vue";
import Paginate from "vuejs-paginate-next";
import { useStore } from "vuex";

// Получение доступа к хранилищу Vuex
const store = useStore();

// Получение вычисляемых свойств из хранилища
const storedNameQuery = computed(() => {
  return store.state.nameQuery;
});

const storedStatusQuery = computed(() => {
  return store.state.statusQuery;
});

const storedPageQuery = computed(() => {
  return store.state.pageQuery;
});

const charactersData = computed(() => {
  return store.state.charactersData;
});

// Функция обратного вызова при клике на пагинации
const clickCallback = (page) => {
  store.commit("SET_PAGE_QUERY", page);

  // Создание реактивного объекта queryParams с обновленными значениями
  const queryParams = reactive({
    name: storedNameQuery,
    status: storedStatusQuery,
    page,
  });

  // Вызов действия для загрузки данных с передачей параметров запроса
  store.dispatch("fetchCharactersData", queryParams);

  // Прокрутка страницы вверх
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <!-- Компонент пагинации -->
  <paginate
    v-if="charactersData && charactersData.info?.pages > 1"
    v-model="storedPageQuery"
    :page-count="charactersData?.info?.pages"
    :page-range="4"
    :click-handler="clickCallback"
    :hide-prev-next="true"
    :prev-text="'◀'"
    :next-text="'▶'"
    :container-class="'pagination-container'"
    :page-class="'paginate-buttons'"
    :active-class="'active-page'"
    :next-class="'paginate-buttons'"
    :prev-class="'paginate-buttons'"
  />
</template>
