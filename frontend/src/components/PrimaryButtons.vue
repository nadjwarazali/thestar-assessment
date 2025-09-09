<script setup>
defineProps({
  title: { type: String, required: true },
  href: String,
})
</script>
<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="text-white font-semibold bg-[#192F8E] hover:bg-[#0f1e66] rounded-full px-6 py-3 shadow-md"
  >
    {{ title }}
  </a>
</template>
