<template>
  <div class="row justify-around q-gutter-sm q-mt-md">
    <div v-for="cat in categories" :key="cat.name" class="column items-center">
      <q-avatar size="64px" class="bg-orange-1">
        <img :src="cat.icon" />
      </q-avatar>
      <div class="text-caption text-center q-mt-xs">{{ cat.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  { name: 'Laptops', icon: 'https://cdn-icons-png.flaticon.com/512/18148/18148096.png' },
  { name: 'Gaming', icon: 'https://cdn-icons-png.flaticon.com/512/11936/11936814.png' },
  { name: 'Celulares', icon: 'https://cdn-icons-png.flaticon.com/512/14621/14621612.png' },
  { name: 'Electrónica', icon: 'https://cdn-icons-png.flaticon.com/512/4768/4768930.png' },
  { name: 'Hogar', icon: 'https://cdn-icons-png.flaticon.com/512/5680/5680137.png' }
]
</script>
