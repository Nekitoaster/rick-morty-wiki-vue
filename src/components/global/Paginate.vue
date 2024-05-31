<script setup>
import { ref, computed, reactive } from "vue";
import { VueAwesomePaginate } from "vue-awesome-paginate";
import { useStore } from "vuex";
import ArrowLeftIcon from "../icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "../icons/ArrowRightIcon.vue";

const store = useStore();
const charactersData = computed(() => {
  return store.state.charactersData;
});

const currentPage = ref(1);
const queryParams = reactive({ page: currentPage });

const onClickHandler = (page) => {
  console.log(page);
  store.dispatch("fetchCharactersData", queryParams);
};
</script>

<template>
  <vue-awesome-paginate
    v-if="charactersData?.info?.pages > 1"
    :total-items="charactersData?.info?.count"
    :items-per-page="20"
    :max-pages-shown="4"
    v-model="currentPage"
    :on-click="onClickHandler"
    :hide-prev-next-when-ends="true"
  >
    <template #prev-button>
      <span class="button__icon"> <ArrowLeftIcon /></span>
    </template>
    <template #next-button>
      <span class="button__icon"> <ArrowRightIcon /></span>
    </template>
  </vue-awesome-paginate>
</template>
