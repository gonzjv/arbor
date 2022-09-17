<script setup></script>
<template>
  <main class="h-[680px] relative">
    <article
      class="absolute bottom-32 left-0 flex flex-col items-start gap-3"
    >
      <h2 class="text-6xl">ARBOR PLATFORM</h2>
      <p class="w-96 text-left text-lg">
        {{ $t('aboutPlatform.text') }}
      </p>
    </article>
    <div
      class="absolute bottom-0 left-0 w-72 h-20 border border-green-400 rounded-full blur-sm"
    ></div>
    <button
      class="text-2xl text-slate-700 absolute bottom-2 left-4 w-64 h-16 bg-green-400 rounded-full blur-none"
    >
      {{ $t('aboutPlatform.try') }}
    </button>
  </main>
</template>
