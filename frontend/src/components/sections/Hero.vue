<script setup>
import heroImg from '@/assets/img/hero-section.svg'
import { ref, onMounted } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function startCountdown() {
  const targetDate = new Date('2026-05-24T11:00:00').getTime()
  setInterval(() => {
    const now = new Date().getTime()
    const diff = targetDate - now

    days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
  }, 1000)
}

onMounted(startCountdown)
</script>

<template>
  <section
    class="flex flex-col md:flex-row gap-5 justify-center items-center bg-white py-10 mx-10 my-5"
  >
    <img class="min-h-60 w-auto" :src="heroImg" alt="logo" />
    <div class="flex flex-col max-w-xl px-4 mt-5 sm:px-6 lg:px-8">
      <div class="flex gap-2 items-end mb-3">
        <div>
          <p class="countdown-title">Days</p>
          <div class="countdown-wrapper">
            <div class="countdown-box countdown-text">{{ days }}</div>
            <p class="countdown-text">:</p>
          </div>
        </div>
        <div>
          <p class="countdown-title">Hours</p>
          <div class="countdown-wrapper">
            <div class="countdown-box countdown-text">{{ hours }}</div>
            <p class="countdown-text">:</p>
          </div>
        </div>
        <div>
          <p class="countdown-title">Mins</p>
          <div class="countdown-wrapper">
            <div class="countdown-box countdown-text">{{ minutes }}</div>
            <p class="countdown-text">:</p>
          </div>
        </div>
        <div>
          <p class="countdown-title">Secs</p>
          <div class="countdown-wrapper">
            <div class="countdown-box countdown-text">{{ seconds }}</div>
          </div>
        </div>
      </div>
      <div class="text-start">
        <h1 class="font-extrabold text-black text-4xl">
          Kuala Lumpur, Midvalley Exhibition Centre
        </h1>
        <p class="bg-[#8F3595] rounded-md my-4 py-2 text-xl font-semibold text-center text-white">
          24 & 25 May 2025 &nbsp; | &nbsp; 11am - 6pm
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.countdown-title {
  @apply text-sm font-[600] mb-1;
}

.countdown-wrapper {
  @apply flex flex-row items-center gap-2;
}

.countdown-text {
  @apply text-xl font-black text-center;
}

.countdown-box {
  @apply bg-[#EBEFF5] rounded-md w-12 py-3;
}
</style>
