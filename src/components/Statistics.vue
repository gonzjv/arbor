<script setup>
const STATS = [
  {
    term: 'statistics.accounts',
    number: '980 524',
  },
  {
    term: 'statistics.blocks',
    number: '1 576 524',
  },
  {
    term: 'statistics.transactions',
    number: '1 110 524',
  },
  {
    term: 'statistics.amount',
    number: '158 524',
  },
];
</script>
<template>
  <section
    class="flex md:flex-col md:gap-10 lg:flex-row md:px-5 lg:px-[140px] text-gray-800 bg-green-400 py-36"
  >
    <h2 class="text-5xl text-left">
      {{ $t('statistics.header') }}
    </h2>
    <dl class="flex flex-wrap md:gap-x-20 lg:gap-x-48 gap-y-14 md:ml-10 lg:ml-28">
      <dt class="w-72 border-t border-gray-800 pt-3 flex flex-col items-start gap-3" v-for="stat in STATS">
        <p class="text-xl">
          {{ $t(stat.term) }}
        </p>
        <dd class="text-5xl font-bold">{{stat.number}}</dd>
      </dt>
    </dl>
  </section>
</template>
