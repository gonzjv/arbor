<script setup>
import speedImg from '@/assets/speed.svg';
import securityImg from '@/assets/security.svg';
import simplicityImg from '@/assets/simplicity.svg';
import supportImg from '@/assets/support.svg';

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
    class="flex flex-col items-start gap-14 lg:mt-20 xl:mt-52 px-5 lg:px-20 2xl:px-[140px]"
  >
    <h2 class="text-4xl md:text-5xl text-left">
      {{ $t('advantages.header') }}
    </h2>
    <article
      class="flex-col xl:flex-row flex gap-10 xl:gap-36 border-green-400 border-b-2 md:border-none pb-5 md:pb-0"
    >
      <figure
        v-for="adv in advantagesArr"
        class="flex-col md:flex-row md:items-center flex xl:flex-col lg:w-full xl:w-64 gap-7"
      >
        <div
          class="w-1/2 md:w-1/3 xl:w-64 h-44 md:h-64 flex items-center justify-center bg-gray-800 rounded-3xl"
        >
          <img
            class="w-28 md:w-[160px]"
            :src="adv.img"
            alt=""
          />
        </div>
        <figcaption
          class="md:w-2/3 xl:w-full flex flex-col items-start gap-3 text-left"
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
    <article
      class="flex flex-col items-center md:items-stretch md:flex-row lg:gap-10 xl:gap-24 mb-10 md:w-full"
    >
      <figure class="w-2/3 md:min-w-max">
        <img :src="supportImg" alt="" />
      </figure>
      <h4
        class="md:w-10/12 2xl:w-full md:text-2xl xl:text-3xl text-left font-semibold flex items-center md:border-t-2 border-green-400"
      >
        {{ $t('advantages.purpose') }}
      </h4>
    </article>
  </section>
</template>
