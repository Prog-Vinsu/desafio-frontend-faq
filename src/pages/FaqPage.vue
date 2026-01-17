<template>
  <q-page class="column no-padding">
    <div class="col q-pa-md full-width">
      <div class="container" :style="{paddingRight: isMobile ? '16px' : '20%'}">

        <div class="q-mb-lg text-grey-6">
          <div v-if="!isMobile">
            <span class="cursor-pointer text-primary hover-underline" @click="$router.push('/')">Início</span>
            <span class="q-mx-xs">/</span>
          </div>
          <div class="row items-center q-mb-lg q-pa-md">
            <q-avatar
              text-color="dark"
              icon="help_outline"
              :size="isMobile ? '32px' : '48px'"
              font-size="28px"
              class="q-mr-md bg-green-1"
            />
            <h1 :class=" isMobile ? 'text-h5 text-weight-bold text-dark q-my-none' : 'text-h4 text-weight-bold text-dark q-my-none'">Ajuda</h1>
          </div>
        </div>

        <SearchInput />

        <FaqList />

      </div>
    </div>

    <AppBanner />
  </q-page>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import { useQuasar } from 'quasar'
  import { useFaqStore } from 'src/stores/faq-store';

  import SearchInput from 'src/components/FAQ/SearchInput.vue';
  import AppBanner from 'src/components/FAQ/AppBanner.vue';
  import FaqList from 'src/components/FAQ/FaqList.vue';

  const $q = useQuasar()
  const faqStore = useFaqStore();
  const isMobile = computed(() => $q.screen.lt.md)

  onMounted(async () => {
    await faqStore.fetchFaqs();
  });

</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  .hover-underline:hover {
    text-decoration: underline;
  }

  .bg-primary-lighter {
    background-color: $primary-lighter !important;
  }
</style>
