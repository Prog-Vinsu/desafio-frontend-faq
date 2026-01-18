<template>
  <q-card flat bordered class="q-py-xl q-px-md text-center bg-white rounded-borders">

    <div class="q-mb-md">
      <q-img
        :src="ilustracaoBusca"
        width="200px"
        fit="contain"
        class="q-mb-md"
      />
    </div>

    <div class="text-weight-bold text-dark text-body1 q-mb-xs">
      Não foram encontrados resultados para a busca.
    </div>

    <div class="text-grey-6 text-body2 q-mb-lg">
      Confira os dados e tente novamente.
    </div>

    <q-btn
      flat
      no-caps
      color="primary"
      class="text-weight-bold"
      @click="$emit('clear')"
    >
      <q-icon name="replay" size="xs" class="q-mr-sm rotate-icon" />
      Limpar busca
    </q-btn>

  </q-card>
</template>

<script setup lang="ts">
  import ilustracaoBusca from 'src/assets/ilustracao-placeholder-busca.svg'
  defineEmits(['clear']);
</script>

<style lang="scss" scoped>
  .rotate-icon {
      transform: scaleX(-1);
  }
</style>
