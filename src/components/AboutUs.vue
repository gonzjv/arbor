<script setup>
import aboutUsImg from '@/assets/about-us.svg';
</script>
<template>
  <section
    class="flex items-center justify-between md:px-5 lg:px-[140px] h-[600px]"
  >
    <article
      class="h-2/3 w-2/3 flex flex-col items-start border-b border-b-green-400 justify-center gap-5"
    >
      <h2 class="text-5xl">
        {{ $t('aboutUs.header') }}
      </h2>
      <p class="text-lg text-left mt-5">
        {{ $t('aboutUs.descriptionStart') }}
      </p>
      <p class="text-lg text-left">
        {{ $t('aboutUs.descriptionEnd') }}
      </p>
    </article>
    <div
      class="w-1/3 flex justify-end md:items-start lg:items-center"
    >
      <div
        class="md:h-[200px] md:w-[200px] lg:h-[512px] lg:w-[512px] rounded-full border border-green-400 flex justify-center items-center"
      >
        <figure
          class="md:w-32 lg:w-80 md:h-32 lg:h-80"
        >
          <img :src="aboutUsImg" alt="About Us" />
        </figure>
      </div>
    </div>
  </section>
</template>
