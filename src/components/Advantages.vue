<script setup>
import speedImg from '@/assets/speed.svg';
import securityImg from '@/assets/security.svg';
import simplicityImg from '@/assets/simplicity.svg';

const advantagesArr = [
  {
    header: 'advantages.speed.header',
    text: 'advantages.speed.text',
    img: speedImg,
  },
  {
    header: 'advantages.security.header',
    text: 'advantages.security.text',
    img: securityImg,
  },
  {
    header: 'advantages.simplicity.header',
    text: 'advantages.simplicity.text',
    img: simplicityImg,
  },
];
</script>
<template>
  <section
    class="flex flex-col items-start gap-5 mt-52"
  >
    <h2 class="text-5xl">
      {{ $t('advantages.header') }}
    </h2>
    <article class="flex gap-36">
      <figure
        v-for="adv in advantagesArr"
        class="flex flex-col w-64 gap-7"
      >
        <div
          class="w-64 h-64 flex items-center justify-center bg-gray-700 rounded-3xl"
        >
          <img class="" :src="adv.img" alt="" />
        </div>
        <figcaption
          class="flex flex-col items-start gap-3 text-left"
        >
          <h3 class="text-2xl text-green-400">
            {{ $t(adv.header) }}
          </h3>
          <p class="text-base">
            {{ $t(adv.text) }}
          </p>
        </figcaption>
      </figure>
    </article>
  </section>
</template>
