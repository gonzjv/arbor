<script setup>
import treeImg from '@/assets/tree.png';
</script>
<template>
  <main class="h-[680px] relative">
    <img
      class="overflow-hidden absolute w-[844px] xl:w-[1055px] bottom-36 xl:-bottom-14 md:right-80 lg:right-28 xl:-right-2 z-0"
      :src="treeImg"
      alt=""
    />
    <article
      class="absolute left-5 md:bottom-60 lg:bottom-32 lg:left-[140px] flex flex-col items-start gap-3"
    >
      <h2 class="text-5xl">ARBOR PLATFORM</h2>
      <p class="w-96 text-left text-lg">
        {{ $t('aboutPlatform.text') }}
      </p>
    </article>
    <div
      class="absolute bottom-[135px] lg:bottom-0 left-5 lg:left-[140px] w-72 h-20 border border-green-400 rounded-full blur-sm"
    ></div>
    <button
      class="hover:bg-green-50 text-2xl text-slate-700 absolute bottom-36 lg:bottom-2 left-9 lg:left-[155px] w-64 h-16 bg-green-400 rounded-full blur-none"
    >
      {{ $t('aboutPlatform.try') }}
    </button>
  </main>
</template>
