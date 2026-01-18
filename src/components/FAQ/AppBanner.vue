<template>
  <div class="bg-primary-light q-py-lg full-width">
    <div class="container flex items-center" :class="isMobile ? 'column justify-center text-center q-gutter-y-md' : 'row justify-between'">
      <div class="text-h5 text-weight-bold text-grey-9" style="line-height: 1.2;">
        Experimente o aplicativo<br v-if="isMobile"> de Jaguaré!
      </div>

      <div class="row q-gutter-sm items-center">
        <a href="https://apple.com/br/app-store" target="_blank" class="app-link">
          <img
            :src="imgAppStore"
            alt="Baixar na App Store"
            :style="{ height: isMobile ? '38px' : '48px' }"
          >
        </a>
        <a href="https://play.google.com/store" target="_blank" class="app-link">
          <img
            :src="imgGooglePlay"
            alt="Disponível no Google Play"
            :style="{ height: isMobile ? '50px' : '61px' }"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useQuasar } from 'quasar'
  import imgAppStore from 'src/assets/serviceImages/appStore.png'
  import imgGooglePlay from 'src/assets/serviceImages/GooglePlay.png'

  const $q = useQuasar()
  const isMobile = computed(() => $q.screen.lt.md)
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .app-link {
    transition: opacity 0.3s;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }

  .bg-primary-light {
    background-color: $primary-light !important;
  }
</style>
