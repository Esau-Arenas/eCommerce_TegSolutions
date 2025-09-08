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
    question: "¿Qué servicios ofrece TegSolutions?",
    answer: {
      text: "Ofrecemos tres soluciones principales: ERP Empresarial, Desarrollo Web a medida y Aplicaciones Móviles."
    }
  },
  {
    question: "¿Cuál es el modelo de precios de sus servicios?",
    answer: {
      text: "Dependiendo del servicio, manejamos planes de suscripción, pagos únicos por desarrollo o licenciamiento de software. Puedes consultar más detalles en la sección ",
      link: "/",
      linkText: "Productos"
    }
  },
  {
    question: "¿El ERP puede adaptarse al tamaño de mi empresa?",
    answer: {
      text: "Sí, nuestro ERP está diseñado para adaptarse tanto a pequeñas empresas como a grandes corporaciones."
    }
  },
  {
    question: "¿Qué incluye el servicio de desarrollo web?",
    answer: {
      text: "Incluye diseño responsivo, optimización SEO, integración con bases de datos y personalización total según tus necesidades."
    }
  },
  {
    question: "¿Las aplicaciones móviles funcionan en Android y iOS?",
    answer: {
      text: "Sí, nuestras apps son multiplataforma y funcionan en ambos sistemas operativos."
    }
  },
  {
    question: "¿Ofrecen soporte técnico después de la entrega?",
    answer: {
      text: "Sí, brindamos soporte y mantenimiento para asegurar que tu solución digital siga funcionando sin problemas."
    }
  },
  {
    question: "¿Puedo solicitar una demostración antes de contratar?",
    answer: {
      text: "Claro, puedes ponerte en contacto con nosotros desde el ",
      link: "/contact",
      linkText: "Formulario de contacto"
    }
  },
  {
    question: "¿Realizan proyectos personalizados?",
    answer: {
      text: "Sí, todos nuestros servicios se adaptan a las necesidades específicas de cada cliente."
    }
  }
]);
</script>