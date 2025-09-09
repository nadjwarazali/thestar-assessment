<script setup>
import { ref } from 'vue'
import axios from 'axios'
import chatbotIcon from '@/assets/img/support-agent.svg'

const messages = ref([
  { sender: 'bot', text: '👋 Hi! I’m your Job Fair Assistant. How can I help you today?' },
])
const input = ref('')
const isOpen = ref(false)
const loading = ref(false)

function openChatbot() {
  isOpen.value = true
}
function closeChatbot() {
  isOpen.value = false
}

async function sendMessage() {
  const userMsg = input.value
  if (!userMsg) return

  messages.value.push({ sender: 'user', text: userMsg })
  input.value = ''
  loading.value = true

  try {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are a helpful assistant for myStar Job Fair. Only answer job fair related questions. Keep answers short and professional.',
          },
          { role: 'user', content: userMsg },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    )

    const reply = res.data.choices[0].message.content
    messages.value.push({ sender: 'bot', text: reply })
  } catch (err) {
    if (err.response?.status === 429) {
      messages.value.push({
        sender: 'bot',
        text: "⚠️ I'm being rate-limited. Please wait and try again.",
      })
    } else {
      messages.value.push({
        sender: 'bot',
        text: '⚠️ Sorry, I couldn’t reach ChatGPT API.',
      })
    }
    console.error(err)
  }

  loading.value = false
}
</script>

<template>
  <div class="fixed bottom-6 right-6">
    <div v-if="isOpen" class="rounded-xl bg-white border flex flex-col w-80 shadow-lg">
      <div class="bg-[#192F8E] flex flex-row items-center justify-between p-4 rounded-t-xl">
        <div class="flex flex-row gap-2">
          <img :src="chatbotIcon" class="h-5" />
          <div class="text-white font-semibold">Job Fair Assistant</div>
        </div>
        <button @click="closeChatbot" class="text-white">✕</button>
      </div>

      <div class="flex-1 overflow-y-auto p-3 space-y-2 h-[400px]">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          :class="msg.sender === 'user' ? 'text-right' : 'text-left'"
        >
          <span
            :class="
              msg.sender === 'user'
                ? 'inline-block bg-blue-500 text-white px-3 py-1 rounded-lg'
                : 'inline-block bg-gray-200 text-black px-3 py-1 rounded-lg'
            "
          >
            {{ msg.text }}
          </span>
        </div>
        <p v-if="loading" class="text-sm text-gray-400">Bot is typing...</p>
      </div>

      <div class="p-2 border-t flex gap-2">
        <input
          v-model="input"
          @keyup.enter="sendMessage"
          placeholder="Type your question..."
          class="flex-1 border rounded px-2 py-1 text-sm"
        />
        <button
          @click="sendMessage"
          class="bg-[#192F8E] text-white px-3 py-1 rounded text-sm"
          :disabled="loading"
        >
          Send
        </button>
      </div>
    </div>

    <button
      v-else
      @click="openChatbot"
      class="flex flex-row justify-center gap-1 items-center text-white font-semibold bg-[#192F8E] hover:bg-[#0f1e66] rounded-full px-6 py-3 shadow-md"
    >
      <img :src="chatbotIcon" class="h-5" />
      Chatbot
    </button>
  </div>
</template>
