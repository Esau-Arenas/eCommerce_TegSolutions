<template>
  <q-drawer
    :model-value="isOpen"
    @update:model-value="emit('update:isOpen', $event)"
    side="right"
    overlay
    behavior="mobile"
    :width="300"
  >
    <q-card flat>
      <q-card-section>
        <div class="text-h6 text-primary">Mi carrito 🛒</div>
      </q-card-section>

      <q-separator />

      <q-list>
        <q-item v-for="item in cart.items" :key="item.id">
          <q-item-section>
            <q-item-label class="text-primary" >{{ item.title }}</q-item-label>
            <q-item-label caption>{{ item.quantity }} x Q{{ item.price }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn
              icon="delete"
              flat
              dense
              color="negative"
              @click="cart.removeItem(item.id)"
            />
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator />

      <q-card-section>
        <div class="text-subtitle1 text-primary">Total: Q{{ total }}</div>
        <q-btn
          label="Finalizar compra"
          color="primary"
          class="full-width q-mt-sm"
          @click="goToCheckout"
        />
      </q-card-section>
    </q-card>
  </q-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from 'stores/cart'
import { useRouter } from 'vue-router'

// ✅ Declarar prop correctamente
defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['update:isOpen'])

const cart = useCartStore()
const router = useRouter() // 👈 ya no lo dejes comentado

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function goToCheckout() {
  // Mostrar alert simulando pago
  alert('Redirigiendo a la página de pago (simulado) 🛒💳')
  // 👇 Opción 1: ignorar promesa (recomendado en este caso)
  void router.push('/checkout')

  // 👇 Opción 2: si quieres esperar que cargue la página de checkout
  // await router.push('/checkout')  <-- para esto tendrías que marcar la función como async
}
</script>

