<template>
  <q-page class="q-pa-md">
    <h4>Checkout</h4>

    <q-form @submit.prevent="confirmOrder" class="q-gutter-md">

      <!-- Datos de envío -->
      <q-card flat bordered class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Datos de Envío</div>
        </q-card-section>

        <q-input filled v-model="name" label="Nombre completo" required />
        <q-input filled v-model="address" label="Dirección de envío" required />
        <q-input filled v-model="phone" label="Teléfono" type="tel" required />
        <q-input filled v-model="email" label="Correo electrónico" type="email" required />
      </q-card>

      <!-- Datos de tarjeta -->
      <q-card flat bordered class="q-pa-md q-mt-md">
        <q-card-section>
          <div class="text-h6">Datos de Pago</div>
        </q-card-section>

        <q-input
          filled
          v-model="cardNumber"
          label="Número de tarjeta"
          mask="#### #### #### ####"
          hint="Ingrese 16 dígitos"
          required
        />
        <div class="row q-col-gutter-md">
          <q-input
            filled
            v-model="cardExpiry"
            label="MM/AA"
            mask="##/##"
            class="col"
            required
          />
          <q-input
            filled
            v-model="cardCvv"
            label="CVV"
            mask="###"
            class="col"
            type="password"
            required
          />
        </div>
      </q-card>

      <q-separator spaced />

      <div class="text-subtitle1 text-primary">
        Total a pagar: Q{{ total }}
      </div>

      <!-- Botones -->
      <div class="row q-gutter-sm q-mt-md">
        <q-btn label="Confirmar pedido" color="green" type="submit" />
        <q-btn label="Cancelar" color="negative" flat @click="cancelOrder" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCartStore } from "stores/cart";
import { useRouter } from "vue-router";

const cart = useCartStore();
const router = useRouter();

// Datos de envío
const name = ref("");
const address = ref("");
const phone = ref("");
const email = ref("");

// Datos de tarjeta
const cardNumber = ref("");
const cardExpiry = ref("");
const cardCvv = ref("");

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

// ✅ Confirmar pedido
function confirmOrder() {
  if (!cardNumber.value || !cardExpiry.value || !cardCvv.value) {
    alert("⚠️ Debes completar todos los datos de pago.");
    return;
  }

  alert(`✅ Pedido confirmado para ${name.value}. 
Total: Q${total.value}. 
¡Gracias por tu compra! 🛒`);

  cart.clearCart();
  void router.push("/"); // Regresa al inicio
}

// ❌ Cancelar pedido
function cancelOrder() {
  alert("❌ Pedido cancelado.");
  void router.push("/");
}
</script>
