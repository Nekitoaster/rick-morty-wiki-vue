<script setup>
import { ref, reactive } from "vue";
import SearchIcon from "../icons/SearchIcon.vue";
import { useStore } from "vuex";

const store = useStore();
const nameQuery = ref("");
const statusQuery = ref("");
const queryParams = reactive({ name: "", status: "" });

const submit = () => {
  queryParams.name = nameQuery.value;
  queryParams.status = statusQuery.value;
  store.dispatch("fetchCharactersData", queryParams);
};
</script>

<template>
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
