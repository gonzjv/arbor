<script setup>
import aboutUsImg from '@/assets/about-us.svg';
</script>
<template>
  <section
    class="flex justify-between px-[140px]"
  >
    <article
      class="h-[700px] w-1/2 flex flex-col items-start border-b border-b-green-400 justify-center gap-5"
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
      class="w-1/2 flex justify-end items-center"
    >
      <div
        class="h-[512px] w-[512px] rounded-full border border-green-400 flex justify-center items-center"
      >
        <figure class="">
          <img :src="aboutUsImg" alt="About Us" />
        </figure>
      </div>
    </div>
  </section>
</template>
