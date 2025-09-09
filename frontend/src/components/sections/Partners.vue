<script setup>
const logosTop = [
  'src/assets/img/partners/perkeso.png',
  'src/assets/img/partners/myfuturejobs.png',
  'src/assets/img/partners/epf.png',
  'src/assets/img/partners/mynext.png',
  'src/assets/img/partners/Qi.png',
  'src/assets/img/partners/aham-capital.png',
  'src/assets/img/partners/top.jpg',
  'src/assets/img/partners/seatrium.png',
  'src/assets/img/partners/padini.jpg',
  'src/assets/img/partners/mag.png',
]

const logosBottom = [
  'src/assets/img/partners/allianz.png',
  'src/assets/img/partners/babas.png',
  'src/assets/img/partners/guardian.png',
  'src/assets/img/partners/public-bank.jpg',
  'src/assets/img/partners/setel.png',
  'src/assets/img/partners/sports-direct.png',
  'src/assets/img/partners/hays.svg',
  'src/assets/img/partners/intercontinental.png',
  'src/assets/img/partners/habib.png',
  'src/assets/img/partners/marriot.png',
]
</script>

<template>
  <section class="flex flex-col bg-white py-20 mb-4 gap-5">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 items-center mb-10">
      <h1 class="font-extrabold text-black text-3xl text-center">{{ $t('partner.title') }}</h1>
    </div>
    <div class="overflow-hidden whitespace-nowrap my-6">
      <div class="flex animate-scroll-left space-x-12">
        <img
          v-for="(logo, i) in logosTop"
          :key="'top-' + i"
          :src="logo"
          alt="partner logo"
          class="h-10 md:h-16"
        />
        <img
          v-for="(logo, i) in logosTop"
          :key="'top-dup-' + i"
          :src="logo"
          alt="partner logo"
          class="h-10 md:h-16"
        />
      </div>
    </div>

    <div class="overflow-hidden whitespace-nowrap">
      <div class="flex animate-scroll-right space-x-12">
        <img
          v-for="(logo, i) in logosBottom"
          :key="'bottom-' + i"
          :src="logo"
          alt="partner logo"
          class="h-10 md:h-16"
        />
        <img
          v-for="(logo, i) in logosBottom"
          :key="'bottom-dup-' + i"
          :src="logo"
          alt="partner logo"
          class="h-10 md:h-16"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-70%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-70%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  animation: scroll-left 25s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 25s linear infinite;
}

.logo-track:hover {
  animation-play-state: paused;
}
</style>
