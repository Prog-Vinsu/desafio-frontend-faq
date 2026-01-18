<template>
  <q-expansion-item
    v-model="isOpen"
    group="faq-group"
    class="faq-card q-mb-sm overflow-hidden rounded-borders bg-white transition-all"
    :class="isOpen ? 'border-active' : 'border-inactive'"
    :expand-icon-class="isOpen ? 'text-primary' : 'text-grey-5'"
    header-class="q-pa-md items-center"
  >
    <template v-slot:header>
      <div class="row full-width items-center no-wrap header-wrapper text-body1">

        <div class="col text-wrapper">
          <div
            class="title-text"
            :class="isOpen ? 'text-weight-medium' : 'text-weight-regular'"
          >
            {{ item.title }}
          </div>
        </div>

      </div>
    </template>

    <q-card>
      <q-card-section class="q-pt-none q-pb-md q-px-md text-grey-8 text-body1">
        <div v-html="item.content" class="html-content"></div>
      </q-card-section>
    </q-card>

  </q-expansion-item>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { FaqItem } from 'src/components/models';

  defineProps<{
    item: FaqItem;
  }>();

  const isOpen = ref(false);
</script>

<style lang="scss" scoped>
  .faq-card {
    border: 1px solid transparent;
    transition: all 0.3s ease;
  }

  .border-inactive {
    border-color: $gray-border;
  }

  .border-active {
    border-color: $primary;
    background-color: #fafafa;
  }

  .header-wrapper {
    min-width: 0;
  }

  .text-wrapper {
    min-width: 0;
  }

  .title-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  .html-content :deep(a) {
    color: $primary;
    text-decoration: none;
    font-weight: bold;
  }

  .html-content :deep(p) {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .text-body1 {
    font-size: 14px;
    @media (min-width: $breakpoint-sm-min) {
      font-size: 16px;
    }
  }
</style>
