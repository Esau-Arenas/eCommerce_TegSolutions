<template>
  <q-page class="q-pa-md">
    <h4>Formulario de Contacto</h4>
    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input filled v-model="name" label="Nombre" required />
      <q-input filled v-model="email" label="Correo electrónico" type="email" required />
      <q-input filled v-model="message" label="Mensaje" type="textarea" required />

      <div class="row q-gutter-sm">
        <q-btn label="Enviar" color="primary" type="submit" />
        <q-btn label="WhatsApp" color="green" @click="sendWhatsApp" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const name = ref('')
const email = ref('')
const message = ref('')

// Número de WhatsApp en formato internacional
const phoneNumber = '50255709530'

// ✅ Enviar "simulado" por correo
function submitForm() {
  alert(`Gracias ${name.value}, tu mensaje ha sido enviado por correo (simulado) 📩`)

  clearForm()
}


// ✅ Enviar por WhatsApp
function sendWhatsApp() {
  const text = `Hola, soy ${name.value}. Mi correo es ${email.value}. Mensaje: ${message.value}`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')

  $q.notify({
    type: 'positive',
    message: 'Tu mensaje se abrió en WhatsApp ✅',
    position: 'top-right'
  })

  clearForm()
}

// ✅ Limpiar formulario
function clearForm() {
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>
