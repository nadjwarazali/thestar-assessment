<script setup>
import logo from '@/assets/img/logo.png'
import PrimaryButtons from '../PrimaryButtons.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggleLang() {
  locale.value = locale.value === 'en' ? 'ms' : 'en'
}
</script>

<template>
  <nav class="bg-white shadow-sm">
    <div class="flex flex-row h-23 items-center justify-between mx-auto px-2 sm:px-6 lg:px-8">
      <img class="h-24 w-auto" :src="logo" alt="logo" />
      <div class="flex gap-2">
        <button class="text-button" @click="toggleLang">
          {{ locale === 'en' ? 'BM' : 'EN' }}
        </button>
        <a href="#contact-section" class="text-button">{{ $t('navbar.contact') }}</a>
        <PrimaryButtons
          :title="$t('navbar.exhibitor')"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdfljb5ahHyBNYXwwtxzPmnRMZC_iSsoPyN0T827kd-Kw9idQ/viewform"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.text-button {
  @apply text-[#192F8E] font-semibold hover:text-[#192F8E] rounded-md px-3 py-3;
}
</style>
