<template>
  <div class="q-mt-md">
    <FaqSkeleton v-if="faqStore.loading" />

    <FaqError
      v-else-if="faqStore.error"
      @retry="faqStore.fetchFaqs()"
    />

    <div v-else-if="!faqStore.hasResults && faqStore.items.length > 0">
      <div class="text-weight-bold text-dark q-mb-md">
          Resultados encontrados para: {{ faqStore.searchTerm }}
      </div>

      <FaqEmpty @clear="limparBusca" />
    </div>

    <div v-else>
      <div v-if="faqStore.searchTerm && faqStore.hasResults" class="text-weight-bold text-dark q-mb-md">
            Resultados encontrados para: {{ faqStore.searchTerm }}
      </div>

      <div v-for="item in faqStore.filteredItems" :key="item.id">
         <FaqItem :item="item" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { useFaqStore } from 'src/stores/faq-store';
  import FaqItem from './FaqItem.vue';
  import FaqSkeleton from './FaqSkeleton.vue';
  import FaqEmpty from './FaqEmpty.vue';
  import FaqError from './FaqError.vue';

  const faqStore = useFaqStore();

  function limparBusca() {
    faqStore.setSearchTerm('');
  }
</script>
