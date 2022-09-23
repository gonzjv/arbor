<script setup>
import aboutUsImg from '@/assets/about-us.svg';
</script>
<template>
  <section
    class="flex flex-col py-10 md:py-0 md:flex-row items-center md:justify-between border-b md:border-none border-b-green-400 px-5 lg:px-[140px] md:h-[500px] lg:h-[600px]"
  >
    <article
      class="pb-4 md:w-2/3 lg:w-1/2 md:border-b border-b-green-400 h-full flex items-center"
    >
      <div
        class="flex flex-col items-start justify-center gap-5"
      >
        <h2 class="text-4xl md:text-5xl">
          {{ $t('aboutUs.header') }}
        </h2>
        <p class="text-lg text-left mt-5">
          {{ $t('aboutUs.descriptionStart') }}
        </p>
        <p class="text-lg text-left">
          {{ $t('aboutUs.descriptionEnd') }}
        </p>
      </div>
    </article>
    <div
      class="md:w-1/3 lg:w-1/2 flex justify-end md:items-start lg:items-center"
    >
      <div
        class="h-[200px] w-[200px] lg:h-[512px] lg:w-[512px] rounded-full border border-green-400 flex justify-center items-center"
      >
        <figure class="w-32 lg:w-80 h-32 lg:h-80">
          <img :src="aboutUsImg" alt="About Us" />
        </figure>
      </div>
    </div>
  </section>
</template>
