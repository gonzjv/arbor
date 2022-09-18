<script setup>
const PRODUCTS = [
  'DEX',
  'Arbor Explorer',
  'Arbor Game',
  'Arbor Family',
  'Arbor Game',
  'Arbor Explorer',
  'DEX',
];
</script>
<template>
  <section
    class="relative flex gap-5 bg-gray-50 text-gray-800"
  >
    <aside
      class="absolute top-0 -left-36 bg-gray-50 w-[1440px] h-full -z-10"
    ></aside>
    <div
      class="my-36 flex flex-col items-start w-1/2"
    >
      <h2 class="text-5xl">
        {{ $t('ecosystem.header') }}
      </h2>
      <p class="mt-96 text-left text-3xl">
        {{ $t('ecosystem.description') }}
      </p>
    </div>
    <div
      class="my-36 w-1/2 flex flex-col gap-5 justify-center"
    >
      <p
        class="opacity-50 hover:opacity-100 text-6xl text-green-700"
        v-for="item in PRODUCTS"
      >
        {{ item }}
      </p>
    </div>
  </section>
</template>
