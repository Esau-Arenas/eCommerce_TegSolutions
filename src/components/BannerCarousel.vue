<template>
  <q-carousel
    swipeable
    animated
    v-model="slide"
    height="300px"
    control-color="white"
    navigation
    navigation-position="bottom"
  >
    <q-carousel-slide
      v-for="(banner, i) in banners"
      :key="i"
      :name="i"
      :img-src="banner"
    />
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(0)

import logoFix from '../assets/back.jpg'

const banners = [
  logoFix,
  logoFix,
  logoFix
]
</script>
