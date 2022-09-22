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
    class="flex flex-col items-start gap-14 lg:mt-20 xl:mt-52 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:px-5 lg:px-20 2xl:px-[140px]"
  >
    <h2 class="text-5xl text-left">
      {{ $t('advantages.header') }}
    </h2>
    <article
      class="md:flex-col xl:flex-row flex md:gap-10 xl:gap-36"
    >
      <figure
        v-for="adv in advantagesArr"
        class="md:flex-row md:items-center flex xl:flex-col lg:w-full xl:w-64 gap-7"
      >
        <div
          class="md:w-1/3 xl:w-64 h-64 flex items-center justify-center bg-gray-800 rounded-3xl"
        >
          <img
            class="lg:w-[200px]"
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
      class="flex lg:gap-10 xl:gap-24 mb-10 w-full"
    >
      <figure class="min-w-max">
        <img :src="supportImg" alt="" />
      </figure>
      <h4
        class="md:w-10/12 2xl:w-full md:text-2xl xl:text-3xl text-left font-semibold flex items-center border-t-2 border-green-400"
      >
        {{ $t('advantages.purpose') }}
      </h4>
    </article>
  </section>
</template>
