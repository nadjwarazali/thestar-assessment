<script setup>
import infoImg from '@/assets/img/info.jpg'
import PrimaryButtons from '../PrimaryButtons.vue'
</script>

<template>
  <section
    class="flex flex-col justify-center gap-5 md:flex-row items-center bg-[#F5F9FF] py-20 px-10 mb-4"
  >
    <img class="max-h-80 w-auto" :src="infoImg" alt="image" />
    <div class="flex flex-col max-w-xl md:w-1/2 px-4 sm:px-6 lg:px-8">
      <div class="text-start">
        <p class="text-black text-md mb-6" v-html="$t('info.infoExpo')"></p>
        <PrimaryButtons :title="$t('navbar.exhibitor')" href="" />
      </div>
    </div>
  </section>
</template>
