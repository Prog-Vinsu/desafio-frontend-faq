<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-white text-grey-8 q-py-sm" style="border-bottom: 1px solid #e0e0e0;">
      <q-toolbar class="container">
        <q-btn
          v-if="isMobile"
          flat
          round
          dense
          size="lg"
          color="grey-6"
          icon="menu"
          @click="toggleSidebar"
          class="q-mr-sm"
        />

        <q-toolbar-title
          shrink
          :class="{ 'absolute-center': isMobile, 'q-mr-md': !isMobile }"
        >
          <div class="row items-center cursor-pointer" @click="$router.push('/')">
            <q-icon
                name="account_balance"
                color="primary"
                :size="isMobile ? '28px' : '32px'"
                class="q-mr-sm"
            />
            <div class="column">
              <span
                class="text-caption text-uppercase text-weight-bold text-primary"
                :style="{ fontSize: isMobile ? '10px' : '12px', lineHeight: '1.1' }"
              >
                Prefeitura
              </span>
              <span
                class="text-caption text-uppercase text-primary"
                :style="{ fontSize: isMobile ? '10px' : '12px', lineHeight: '1.1' }"
              >
                De Jaguaré-ES
              </span>
            </div>
          </div>
        </q-toolbar-title>

        <template v-if="!isMobile">
            <q-space />
            <div class="row q-gutter-x-lg">
              <q-btn
                v-for="item in menuList"
                :key="item.path"
                flat
                no-caps
                :label="item.label"
                :to="item.path"
                exact
                class="text-grey-8 text-weight-regular"
                :class="{ 'item-ativo': route.path === item.path }"
              />
            </div>
            <q-space />
        </template>

        <div class="row items-center q-gutter-x-md" :class="{ 'q-ml-auto': isMobile }">
          <template v-if="!isMobile">
              <q-btn flat no-caps>
                <span class="text-grey-8">Entrar</span>
                <q-icon right name="perm_identity" color="primary" />
              </q-btn>
              <q-separator vertical inset />
          </template>

          <q-btn
            flat
            round
            color="primary"
            icon="search"
            :class="{ 'text-grey-6': isMobile }"
            :size="isMobile ? 'lg' : 'md'"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      class="bg-white"
      :width="280"
    >
      <div class="column full-height">
        <div class="q-pa-md row items-center justify-between bg-grey-1">
           <span class="text-weight-bold text-grey-8">MENU</span>
           <q-btn flat round icon="close" size="sm" color="grey-7" @click="toggleSidebar" />
        </div>

        <q-separator />

        <q-list padding class="text-grey-8">
          <q-item
            v-for="item in menuList"
            :key="item.path"
            clickable
            v-ripple
            :to="item.path"
            active-class="text-primary bg-blue-1 text-weight-bold"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              {{ item.label }}
            </q-item-section>
          </q-item>
        </q-list>

        <div class="q-mt-auto q-pa-md">
           <q-btn outline color="primary" class="full-width" label="Entrar" icon="perm_identity" />
        </div>
      </div>
    </q-drawer>

    <q-page-container class="bg-background-page">
      <router-view />

      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[24, 24]">
        <q-btn fab icon="keyboard_arrow_up" color="white" text-color="grey-8" class="shadow-3" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-white text-grey-8">
      <div class="container q-py-xl">
        <div v-if="isMobile" class="column items-center text-center q-gutter-y-lg">
           <div class="row items-center justify-center">
              <q-icon name="account_balance" color="primary" size="32px" class="q-mr-sm" />
              <div class="column items-start">
                <span class="text-caption text-uppercase text-weight-bold text-primary">Prefeitura</span>
                <span class="text-caption text-uppercase text-primary">De Jaguaré-ES</span>
              </div>
           </div>

           <div class="row q-gutter-md">
             <q-btn round flat color="primary" class="bg-green-1" icon="facebook" />
             <q-btn round flat color="primary" class="bg-green-1" icon="camera_alt" />
             <q-btn round flat color="primary" class="bg-green-1" icon="smart_display" />
             <q-btn round flat color="primary" class="bg-green-1" icon="language" />
           </div>

           <div class="column items-center">
              <div class="text-weight-bold q-mb-sm">Telefone 24 horas:</div>
              <div class="row q-mb-md">
                <div>
                  <q-icon name="phone" color="primary" size="xs" class="q-mr-xs" />
                  <span class="text-weight-bold">162</span>
                  <div class="column items-center">
                    <span class="q-ml-xs text-grey-6 text-caption">Capital</span>
                  </div>
                </div>
                <q-separator vertical class="q-mx-md" style="height: 15px" />
                <div>
                  <q-icon name="phone" color="primary" size="xs" class="q-mr-xs" />
                  <span class="text-weight-bold">0800.283.9059</span>
                  <div class="column">
                    <span class="q-ml-xs text-grey-6 text-caption">Outras localidades</span>
                  </div>
                </div>
              </div>
           </div>

           <q-separator class="full-width" />
           <div class="text-caption text-grey-5">Um produto <span class="text-weight-bold text-grey-7">UpCities</span></div>
        </div>

        <div v-else class="row q-col-gutter-lg">
          <div class="col-12 col-md-3">
             <div class="row items-center q-mb-md">
                <q-icon name="account_balance" color="primary" size="28px" class="q-mr-sm" />
                <div class="column">
                  <span class="text-caption text-uppercase text-weight-bold text-primary">Prefeitura</span>
                  <span class="text-caption text-uppercase text-primary">De Jaguaré-ES</span>
                </div>
             </div>
             <div class="row q-gutter-sm q-mt-md">
               <q-btn round flat size="sm" color="primary" class="bg-green-1" icon="facebook" />
               <q-btn round flat size="sm" color="primary" class="bg-green-1" icon="camera_alt" />
               <q-btn round flat size="sm" color="primary" class="bg-green-1" icon="smart_display" />
               <q-btn round flat size="sm" color="primary" class="bg-green-1" icon="language" />
             </div>
          </div>

          <div class="col-12 col-md-3 column q-gutter-y-sm text-body2">
             <a href="#" class="text-grey-8 text-no-decoration hover-underline">Sobre a Central de Serviços</a>
             <a href="#" class="text-grey-8 text-no-decoration hover-underline">Estatísticas</a>
          </div>

          <div class="col-12 col-md-3 column q-gutter-y-sm text-body2">
             <a href="#" class="text-grey-8 text-no-decoration hover-underline">Serviços</a>
             <a href="#" class="text-grey-8 text-no-decoration hover-underline">Minhas Solicitações</a>
             <a href="#" class="text-grey-8 text-no-decoration hover-underline">Dúvidas</a>
          </div>

          <div class="col-12 col-md-3 text-body2">
             <div class="text-weight-bold q-mb-md">Telefone 24 horas:</div>
             <div class="row  q-gutter-x-lg">
               <div class="row">
                 <q-icon name="phone" color="primary" class="q-mr-sm" />
                 <div>
                   <div class="text-weight-bold text-body2">162</div>
                   <div class="text-grey-6">Capital</div>
                 </div>
               </div>
               <q-separator vertical />
               <div class="row">
                 <q-icon name="phone" color="primary" class="q-mr-sm" />
                 <div>
                   <div class="text-weight-bold text-body2">0800.283.9059</div>
                   <div class="text-grey-6">Outras localidades</div>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>

      <div v-if="!isMobile" class="text-center q-py-sm text-caption text-grey-5 border-top-light">
          Um produto <span class="text-weight-bold text-grey-7">UpCities</span>
      </div>

    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useQuasar } from 'quasar'
import { useRoute } from 'vue-router'

  const $q = useQuasar()
  const isMobile = computed(() => $q.screen.lt.md)
  const route = useRoute()

  const leftDrawerOpen = ref(false)
  function toggleSidebar() {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

  const menuList = [
    { label: 'Agendar', path: '/agendar', icon: 'event' },
    { label: 'Meus Agendamentos', path: '/meus-agendamentos', icon: 'list_alt' },
    { label: 'Ajuda', path: '/faq', icon: 'help_outline' }
  ]
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  .item-ativo {
    color: #000 !important;
    font-weight: bold !important;
    background: transparent;
    box-shadow: inset 0 -3px 0 0 #3a3a3a;
    border-radius: 0;
  }

  .text-no-decoration {
    text-decoration: none;
  }
  .hover-underline:hover {
    text-decoration: underline;
  }
  .border-top-light {
      border-top: 1px solid #eee;
  }

  .bg-primary-light {
    background-color: $primary-light !important;
  }

  .bg-background-page {
    background-color: $background-page !important;
  }
</style>
