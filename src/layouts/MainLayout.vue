<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          TegSolutions
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Drawer Lateral -->
    <q-drawer v-model="leftDrawerOpen" side="left" overlay>
      <q-list>
        <q-item clickable v-ripple to="/">
          <q-item-section>Inicio</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contact">
          <q-item-section>Contacto</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/faq">
          <q-item-section>FAQ</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Contenedor de página -->
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
