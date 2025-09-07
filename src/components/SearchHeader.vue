<template>
  <q-header elevated class="bg-red-600 text-white">
    <q-toolbar>
      <!-- Logo -->
      <q-toolbar-title>
        <span class="q-ml-sm">TegSolutions</span>
      </q-toolbar-title>

      <!-- Input de búsqueda -->
      <q-input
        rounded
        dense
        filled
        debounce="300"
        class="bg-white text-black q-mx-md"
        placeholder="Buscar en la tienda"
        v-model="search"
      >
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>

      <!-- Navegación a páginas -->
      <q-btn flat label="Inicio" to="/" />
      <q-btn flat label="Contacto" to="/contact" />
      <q-btn flat label="FAQ" to="/faq" />

      <!-- Botones de usuario y favoritos -->
      <q-btn flat round dense icon="favorite_border" />
      <q-btn flat round dense icon="person" />

      <!-- Carrito -->
      <q-btn flat round dense @click="isDrawerOpen = true" icon="shopping_cart">
        <q-badge
          v-if="cart.items.length"
          color="red"
          floating
          transparent
          :label="cart.items.length"
        />
      </q-btn>
    </q-toolbar>

    <!-- Drawer del carrito -->
    <CartDrawer v-model:isOpen="isDrawerOpen" />
  </q-header>
</template>

<script setup lang="ts">
import CartDrawer from 'components/CartDrawer.vue'
import { ref } from 'vue'
import { useCartStore } from 'stores/cart'

const search = ref('')
const isDrawerOpen = ref(false)
const cart = useCartStore()
</script>
