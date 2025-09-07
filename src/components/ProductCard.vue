<template>
  <q-card
    class="col-xs-6 col-sm-4 col-md-3 q-pa-sm cursor-pointer"
    @click="$emit('click', product)"
  >
    <q-img :src="product.images[0]" />

    <q-card-section>
      <div class="text-subtitle2 ellipsis-2-lines">{{ product.title }}</div>
      <q-rating :model-value="4" max="5" size="16px" color="amber" readonly />
      <div class="row items-center q-mt-xs">
        <span class="text-h6 text-negative q-mr-sm">Q{{ product.price }}</span>
        <q-badge v-if="product.discount" color="red-5" align="middle">
          {{ product.discount }}% off
        </q-badge>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <!-- Detener propagación para que el botón no dispare el click del card -->
      <q-btn
        color="primary"
        label="Agregar"
        @click.stop="$emit('add-to-cart', product)"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: number
    title: string
    price: number
    images: string[]
    discount?: number
    opinions?: number
  }
}>()
</script>
