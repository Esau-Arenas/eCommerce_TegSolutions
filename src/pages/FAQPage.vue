<template>
  <q-page padding>
    <div class="q-pa-md">
      <h2 class="text-h4 q-mb-lg">Preguntas Frecuentes (FAQ)</h2>

      <q-list bordered padding class="rounded-borders bg-grey-1">

        <q-expansion-item
          v-for="(item, index) in faqs"
          :key="index"
          :label="item.question"
          expand-separator
          icon="help_outline"
        >
          <q-card>
            <q-card-section>
              <p>
                {{ item.answer.text }}
                <router-link 
                  v-if="item.answer.link" 
                  :to="item.answer.link" 
                  class="text-primary"
                >
                  {{ item.answer.linkText }}
                </router-link>
              </p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const faqs = ref([
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: {
      text: "Aceptamos tarjetas de crédito, débito y pagos en línea. Consulta más detalles en el carrito",
      link: "/",
      linkText: "Carrito"
    }
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer: {
      text: "Sí, enviamos a nivel nacional. Puedes contactarnos para más información.",
      link: "/contact",
      linkText: "Formulario de contacto"
    }
  },
  {
    question: "¿Puedo devolver un producto si no estoy satisfecho?",
    answer: {
      text: "Sí, puedes contactarnos y hacernos llegar tu solicitud de devolución.",
      link: "/contact",
      linkText: "Formulario de contacto"
    }
  },
  {
    question: "¿Cómo puedo contactar con soporte?",
    answer: {
      text: "Puedes escribirnos directamente desde el ",
      link: "/contact",
      linkText: "Formulario de Contacto"
    }
  },
  {
    question: "¿Dónde puedo ver la ficha completa de un producto?",
    answer: {
      text: "En la sección de ",
      link: "/",
      linkText: "Productos"
    }
  },
  {
    question: "¿Ofrecen descuentos por compras grandes?",
    answer: {
      text: "Sí, ofrecemos precios especiales para compras al por mayor. Solicita más información desde el ",
      link: "/contact",
      linkText: "Formulario de Contacto"
    }
  },
  {
    question: "¿Cómo sé si un producto está disponible?",
    answer: {
      text: "En la página de ",
      link: "/",
      linkText: "Productos"
    }
  },
  {
    question: "¿Puedo recibir notificaciones de nuevas ofertas?",
    answer: {
      text: "Sí, puedes ponerte en contacto con nosotros para ",
      link: "/contac",
      linkText: "Formulario de contacto"
    }
  }
]);
</script>
