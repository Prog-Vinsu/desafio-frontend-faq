<template>
  <div class="text-center q-py-xl">
    <q-icon name="error_outline" color="negative" size="48px" />
    <p class="text-grey-7 q-mt-sm">
      Não foi possível carregar as dúvidas.
    </p>
    <q-btn
      label="Tentar novamente"
      color="primary"
      no-caps
      flat
      @click="$emit('retry')"
    />
  </div>
</template>

<script setup lang="ts">
  defineEmits(['retry']);
</script>
