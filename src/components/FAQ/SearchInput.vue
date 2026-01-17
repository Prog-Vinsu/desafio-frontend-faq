<template>
  <div class="q-mb-xl">
    <q-input
      v-model="faqStore.searchTerm"
      borderless
      class="bg-white rounded-borders q-px-md search-input text-regular"
      placeholder="Digite sua dúvida"
      placeholder-color="grey-5"
      :disabled="faqStore.loading"
    >
      <template v-slot:prepend>
        <q-icon name="search" color="grey-5" />
      </template>

      <template v-slot:append v-if="faqStore.searchTerm">
        <q-icon name="close" @click="faqStore.searchTerm = ''" class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
  import { useFaqStore } from 'src/stores/faq-store';

  const faqStore = useFaqStore();
</script>

<style lang="scss" scoped>
  .search-input {
    transition: box-shadow 0.3s;
    &:focus-within {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  }
</style>
