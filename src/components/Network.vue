<script setup>
import networkImg from '@/assets/network.svg';
</script>
<template>
  <figure
    class="flex gap-[140px] px-[140px] py-36"
  >
    <img :src="networkImg" alt="Network" />
    <figcaption
      class="flex flex-col gap-5 w-full justify-center text-left text-3xl font-semibold text-green-400"
    >
      <p>
        {{ $t('network.arbor') }}
      </p>
      <p>
        {{ $t('network.node') }}
      </p>
    </figcaption>
  </figure>
</template>
