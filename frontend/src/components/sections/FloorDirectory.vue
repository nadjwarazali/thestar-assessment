<script setup>
import floorplan from '@/assets/img/floorplan-midvalley2025.png'
import { ref, computed } from 'vue'

const isOpen = ref(false)
const search = ref('')
const industry = ref('')

function openLightbox() {
  isOpen.value = true
}
function closeLightbox() {
  isOpen.value = false
}

const exhibitors = ref([
  { id: 1, name: 'Setel', booth: 'A1', industry: 'IT' },
  { id: 2, name: 'CIMB', booth: 'B2', industry: 'Finance' },
  { id: 3, name: 'KWSP', booth: 'C3', industry: 'Finance' },
  { id: 4, name: 'Seatrium', booth: 'D4', industry: 'Engineering' },
  { id: 5, name: 'MAG', booth: 'D4', industry: 'Engineering' },
])

const filteredExhibitors = computed(() => {
  return exhibitors.value.filter(
    (ex) =>
      (industry.value ? ex.industry === industry.value : true) &&
      (search.value ? ex.name.toLowerCase().includes(search.value.toLowerCase()) : true),
  )
})
</script>

<template>
  <section class="flex justify-center bg-[#F5F9FF] py-20 px-10 gap-5">
    <div class="items-center">
      <div class="font-extrabold text-black text-3xl text-center mb-10">
        <h1>{{ $t('floorDirectory.title') }}</h1>
      </div>
      <div class="flex flex-col md:flex-row gap-10">
        <div>
          <img :src="floorplan" alt="floor-plan" @click="openLightbox" class="w-90" />
          <div
            v-if="isOpen"
            class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            @click.self="closeLightbox"
          >
            <div class="relative max-w-4xl max-h-[90vh]">
              <button
                @click="closeLightbox"
                class="absolute top-2 right-2 bg-white rounded-full px-3 py-1 shadow-md"
              >
                ✕
              </button>
              <img
                :src="floorplan"
                alt="floor plan large"
                class="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-row gap-4 mb-4">
            <input
              v-model="search"
              type="text"
              placeholder="Search company"
              class="border px-3 py-2 rounded-md w-70 text-sm"
            />
            <select v-model="industry" class="border px-5 py-2 rounded-md text-sm">
              <option value="">All Industries</option>
              <option>IT</option>
              <option>Finance</option>
              <option>Engineering</option>
            </select>
          </div>
          <ul class="divide-y">
            <li v-for="exhibitor in filteredExhibitors" :key="exhibitor.id" class="py-3">
              <div class="font-semibold">{{ exhibitor.name }}</div>
              <div class="text-sm text-gray-600">
                Booth: {{ exhibitor.booth }} • {{ exhibitor.industry }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
