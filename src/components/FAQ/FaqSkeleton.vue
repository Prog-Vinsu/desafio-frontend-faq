<template>
  <div class="q-gutter-y-md">
    <q-card
      v-for="n in 5"
      :key="n"
      flat
      bordered
      class="bg-white rounded-borders"
    >
      <q-item class="q-py-md">
        <q-item-section>
          <q-skeleton type="text" width="70%" class="text-subtitle1" />
        </q-item-section>
        <q-item-section avatar>
          <q-skeleton type="circle" size="24px" />
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>
