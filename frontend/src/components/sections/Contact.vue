<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  name: '',
  email: '',
  message: '',
})

async function handleSubmit() {
  const formData = new FormData()
  formData.append('name', form.value.name)
  formData.append('email', form.value.email)
  formData.append('message', form.value.message)

  try {
    const res = await axios.post('http://localhost/mystarjob/save_contact.php', formData)
    alert(res.data === 'success' ? 'Form submitted!' : 'Error saving form')

    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    console.error(err)
    alert('Something went wrong. Please try again.')
  }
}
</script>

<template>
  <section
    id="contact-section"
    class="flex flex-col bg-white items-center py-10 mb-4 mx-10 my-5 gap-5"
  >
    <div class="max-w-2xl px-4 sm:px-6 lg:px-8 items-center mb-5 text-center">
      <h1 class="font-extrabold text-black text-3xl">{{ $t('navbar.contact') }}</h1>
      <p class="my-2 text-base text-gray-600">
        {{ $t('contact.subtitle') }}
      </p>
    </div>
    <form @submit.prevent="handleSubmit" class="max-w-2xl">
      <div class="flex gap-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="example@youremail.com"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
      </div>
      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          v-model="form.message"
          rows="4"
          placeholder="Write your message here..."
          class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        ></textarea>
      </div>
      <div class="mt-6 flex justify-end">
        <button
          type="submit"
          class="bg-[#192F8E] hover:bg-[#0f1e66] text-white font-semibold px-6 py-2 rounded-full shadow-md"
        >
          {{ $t('contact.button') }}
        </button>
      </div>
    </form>
  </section>
</template>
