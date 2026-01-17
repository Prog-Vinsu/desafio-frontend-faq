<template>
  <div class="q-mt-md">

    <div v-if="store.loading" class="q-gutter-y-md">
      <q-card v-for="n in 5" :key="n" flat bordered class="bg-white">
        <q-item>
          <q-item-section>
            <q-skeleton type="text" width="60%" />
          </q-item-section>
        </q-item>
      </q-card>
    </div>

    <div v-else-if="store.error" class="text-center q-py-xl">
      <q-icon name="error_outline" color="negative" size="48px" />
      <p class="text-grey-7 q-mt-sm">Não foi possível carregar as dúvidas.</p>
      <q-btn label="Tentar novamente" color="primary" no-caps @click="store.fetchFaqs()" />
    </div>

    <div v-else-if="!store.hasResults && store.items.length > 0" class="text-center q-py-xl">
      <q-icon name="search_off" color="grey-4" size="64px" />
      <p class="text-grey-6 text-body1 q-mt-sm">
        Não encontramos resultados para "<strong>{{ store.searchTerm }}</strong>".
      </p>
    </div>

    <div v-else class="q-gutter-y-md">
      <div v-for="item in store.filteredItems" :key="item.id">

         <q-card flat bordered class="q-pa-md">
            <strong>{{ item.title }}</strong>
            <div class="text-caption text-grey ellipsis">{{ item.content.substring(0, 50) }}...</div>
         </q-card>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { useFaqStore } from 'src/stores/faq-store';

  const store = useFaqStore();
</script>
