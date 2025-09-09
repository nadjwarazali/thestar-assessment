<script setup>
import jobmatchingImg from '@/assets/img/job-matching.svg'
import PrimaryButtons from '../PrimaryButtons.vue'
</script>

<template>
  <section
    class="flex flex-col md:flex-row items-end justify-center bg-gradient-to-l from-[#002787] to-[#AE228B] px-10 gap-5"
  >
    <div class="max-w-xl md:w-1/2 px-4 sm:px-6 lg:px-8 py-10">
      <h1 class="font-extrabold text-2xl md:text-4xl text-white">
        {{ $t('jobMatching.title') }}
      </h1>
      <p class="my-4 text-xl text-base text-white">
        {{ $t('jobMatching.info') }}
      </p>
      <PrimaryButtons :title="$t('jobMatching.button')" href="" />
    </div>
    <img class="max-h-[400px]" :src="jobmatchingImg" alt="logo" />
  </section>
</template>
