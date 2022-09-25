<script setup>
import treeImg from '@/assets/tree.png';
</script>
<template>
  <main
    class="h-[600px] md:h-[680px] relative overflow-x-hidden lg:overflow-visible"
  >
    <img
      class="absolute min-w-[390px] md:w-[844px] xl:w-[1055px] md:bottom-36 xl:-bottom-14 -right-32 md:-right-56 lg:-right-2 xl:right-5 z-0"
      :src="treeImg"
      alt=""
    />
    <article
      class="absolute left-3 bottom-44 md:bottom-60 lg:bottom-32 lg:left-[140px] flex flex-col items-start gap-3"
    >
      <h2 class="text-4xl md:text-5xl text-left">
        ARBOR PLATFORM
      </h2>
      <p class="md:w-96 text-left text-lg">
        {{ $t('aboutPlatform.text') }}
      </p>
    </article>
    <div
      class="absolute bottom-[60px] lg:bottom-0 left-4 md:left-5 lg:left-[140px] w-72 h-20 border border-green-400 rounded-full blur-sm"
    ></div>
    <button
      class="hover:bg-green-50 text-2xl text-slate-700 absolute bottom-[68px] lg:bottom-2 left-8 md:left-9 lg:left-[155px] w-64 h-16 bg-green-400 rounded-full blur-none"
    >
      {{ $t('aboutPlatform.try') }}
    </button>
  </main>
</template>
