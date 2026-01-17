<template>
  <div class="q-mt-md">

    <div v-if="faqStore.loading" class="q-gutter-y-md">
      <q-card v-for="n in 4" :key="n" flat bordered class="bg-white">
        <q-item>
          <q-item-section>
            <q-skeleton type="text" width="60%" />
          </q-item-section>
        </q-item>
      </q-card>
    </div>

    <div v-else-if="faqStore.error" class="text-center q-py-xl">
      <q-icon name="error_outline" color="negative" size="48px" />
      <p class="text-grey-7 q-mt-sm">Não foi possível carregar as dúvidas.</p>
      <q-btn label="Tentar novamente" color="primary" no-caps @click="faqStore.fetchFaqs()" />
    </div>

    <div v-else-if="!faqStore.hasResults && faqStore.items.length > 0" class="text-center q-py-xl">
      <q-icon name="search_off" color="grey-4" size="64px" />
      <p class="text-grey-6 text-body1 q-mt-sm">
        Não encontramos resultados para "<strong>{{ faqStore.searchTerm }}</strong>".
      </p>
    </div>

    <div v-else>
      <div v-for="item in faqStore.filteredItems" :key="item.id">
         <FaqItem :item="item" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { useFaqStore } from 'src/stores/faq-store';
  import FaqItem from './FaqItem.vue';

  const faqStore = useFaqStore();
</script>
