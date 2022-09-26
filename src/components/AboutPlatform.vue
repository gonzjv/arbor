<script setup>
import Tree from './svg/Tree.vue';
</script>
<template>
  <main
    class="h-[600px] md:h-[680px] relative overflow-x-hidden lg:overflow-visible"
  >
    <Tree
      class="absolute min-w-[300px] w-[300px] md:w-[700px] xl:w-[950px] bottom-72 md:bottom-20 xl:-bottom-32 -right-24 md:-right-56 lg:-right-0 z-0"
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
    <a href="https://dex.arborplatform.com/">
      <button
        class="hover:bg-green-50 text-2xl text-slate-700 absolute bottom-[68px] lg:bottom-2 left-8 md:left-9 lg:left-[155px] w-64 h-16 bg-green-400 rounded-full blur-none"
      >
        {{ $t('aboutPlatform.try') }}
      </button>
    </a>
  </main>
</template>
