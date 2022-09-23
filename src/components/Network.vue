<script setup>
import networkImg from '@/assets/network.svg';
</script>
<template>
  <figure
    class="flex flex-col items-center gap-20 lg:flex-row lg:gap-[140px] px-5 md:px-16 lg:px-[140px] py-10 md:py-36"
  >
    <img
      class="w-1/2"
      :src="networkImg"
      alt="Network"
    />
    <figcaption
      class="flex flex-col gap-5 w-full justify-center text-left text-xl md:text-3xl font-semibold text-green-400"
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
