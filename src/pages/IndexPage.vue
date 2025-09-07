<template>
  <q-page class="q-pa-md">
    <SearchHeader />
    <BannerCarousel />

    <div class="q-mt-xl">
      <h5>Productos TegSolutions</h5>
      <div class="row q-col-gutter-md q-mt-md">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
          @click="() => openDetails(product)"
        />
      </div>
    </div>

    <!-- Dialogo con detalles del producto -->
    <q-dialog v-model="showDetails" persistent>
      <q-card style="min-width: 300px; max-width: 90vw;">
        
        <!-- Título -->
        <q-card-section>
          <div class="text-h6">
            {{ selectedProduct?.title || 'Sin título' }}
          </div>
        </q-card-section>

        <!-- Carrusel de imágenes -->
        <q-card-section>
          <div v-if="selectedProduct?.images">
            <q-carousel
              v-model="slide"
              arrows
              navigation
              infinite
              animated
              swipeable
              height="300px"
            >
              <q-carousel-slide
                v-for="(img, index) in selectedProduct.images"
                :key="index"
                :name="index"
                :img-src="img"
              />
            </q-carousel>
          </div>
        </q-card-section>

        <!-- Descripción, beneficios y precios -->
        <q-card-section>
          <div v-if="selectedProduct?.description" class="q-mt-sm">
            <strong>Descripción:</strong> {{ selectedProduct.description }}
          </div>

          <div v-if="selectedProduct?.benefits?.length" class="q-mt-md">
            <strong>Funciones y Beneficios:</strong>
            <ul>
              <li v-for="(benefit, i) in selectedProduct.benefits" :key="i">
                {{ benefit }}
              </li>
            </ul>
          </div>

          <div v-if="selectedProduct?.pricing?.length" class="q-mt-md">
            <strong>Planes y Precios:</strong>
            <q-table
              :rows="selectedProduct.pricing"
              :columns="columns"
              flat
              bordered
              dense
            />
          </div>
        </q-card-section>

        <!-- Acciones -->
        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
          <q-btn
            flat
            label="Agregar al carrito"
            color="primary"
            @click="selectedProduct && addToCart(selectedProduct)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue"
import ProductCard from "components/ProductCard.vue"
import BannerCarousel from "components/BannerCarousel.vue"
import SearchHeader from "components/SearchHeader.vue"
import { useCartStore } from "stores/cart"

type PricingPlan = { plan: string; price: string; features: string[] }
type Product = {
  id: number
  title: string
  price: number
  images: string[]   // ahora con varias imágenes
  description: string
  benefits: string[]
  pricing: PricingPlan[]
}

const cart = useCartStore()
const slide = ref(0)

// Productos TegSolutions
const products = ref<Product[]>([
  {
    id: 1,
    title: "ERP Empresarial - TegSolutions",
    price: 15000,
    images: [
      "/img/erp1.png",
      "/img/erp2.png",
      "/img/erp3.png"
    ],
    description:
      "Sistema de planificación de recursos empresariales adaptable a distintas industrias y necesidades organizacionales.",
    benefits: [
      "Integración de procesos en tiempo real",
      "Gestión de inventarios, finanzas y RRHH",
      "Escalable para pymes y grandes empresas",
      "Soporte técnico dedicado",
    ],
    pricing: [
      {
        plan: "Básico",
        price: "Q10,000",
        features: ["Inventario básico", "Facturación", "Usuarios limitados"],
      },
      {
        plan: "Profesional",
        price: "Q15,000",
        features: ["Módulos de RRHH y finanzas", "Usuarios ilimitados", "Soporte estándar"],
      },
      {
        plan: "Premium",
        price: "Q25,000",
        features: ["Personalización completa", "Soporte 24/7", "Integraciones avanzadas"],
      },
    ],
  },
  {
    id: 2,
    title: "Desarrollo Web - TegSolutions",
    price: 8000,
    images: [
      "/img/devweb1.png",
      "/img/devweb2.png",
      "/img/devweb3.png"
    ],
    description:
      "Paquetes de servicios que incluyen desde plantillas de diseño hasta soluciones web personalizadas para empresas.",
    benefits: [
      "Diseño responsivo y moderno",
      "Optimización SEO",
      "Seguridad y mantenimiento",
      "Hosting y dominio incluidos",
    ],
    pricing: [
      {
        plan: "Startup",
        price: "Q5,000",
        features: ["Plantilla básica", "Hosting incluido", "Soporte 3 meses"],
      },
      {
        plan: "Empresarial",
        price: "Q8,000",
        features: ["Diseño personalizado", "Optimización SEO", "Soporte 6 meses"],
      },
      {
        plan: "Corporativo",
        price: "Q12,000",
        features: ["Integraciones avanzadas", "E-commerce", "Soporte 1 año"],
      },
    ],
  },
  {
    id: 3,
    title: "Apps Móviles - TegSolutions",
    price: 12000,
    images: [
      "/img/app.jpg",
      "/img/app2.png",
      "/img/app3.png"
    ],
    description:
      "Aplicaciones móviles preconstruidas o personalizables que resuelven necesidades específicas del mercado empresarial.",
    benefits: [
      "Compatibles con iOS y Android",
      "Interfaces modernas y fáciles de usar",
      "Notificaciones push y geolocalización",
      "Soporte técnico y actualizaciones",
    ],
    pricing: [
      {
        plan: "Lite",
        price: "Q8,000",
        features: ["App híbrida básica", "Diseño estándar", "Usuarios limitados"],
      },
      {
        plan: "Pro",
        price: "Q12,000",
        features: ["App nativa", "Integración con backend", "Usuarios ilimitados"],
      },
      {
        plan: "Enterprise",
        price: "Q20,000",
        features: ["App personalizada", "Soporte 24/7", "Actualizaciones garantizadas"],
      },
    ],
  },
])

const selectedProduct = ref<Product | null>(null)
const showDetails = ref(false)
const carouselSlide = ref(0) // controla el carrusel

function openDetails(product: Product) {
  selectedProduct.value = product
  carouselSlide.value = 0 // reiniciar en la primera imagen
  showDetails.value = true
}

function addToCart(product: Product) {
  cart.addItem(product)
}

// columnas de la tabla de precios
const columns = [
  { name: "plan", label: "Plan", field: "plan" },
  { name: "price", label: "Precio", field: "price" },
  {
    name: "features",
    label: "Características",
    field: (row: PricingPlan) => row.features.join(", "),
  },
]
</script>
