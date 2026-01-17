<template>
  <div class="q-mb-xl">
    <q-input
      v-model="text"
      borderless
      class="bg-white rounded-borders q-px-md search-input text-regular"
      placeholder="Digite sua dúvida"
      placeholder-color="grey-5"
    >
      <template v-slot:prepend>
        <q-icon name="search" color="grey-5" />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const text = ref('');
</script>

<style lang="scss" scoped>
  .search-input {
    transition: box-shadow 0.3s;
    &:focus-within {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  }
</style>
