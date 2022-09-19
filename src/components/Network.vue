<script setup>
import networkImg from '@/assets/network.svg';
</script>
<template>
  <figure>
    <img :src="networkImg" alt="Network" />
    <figcaption class="flex flex-col gap-5">
      <p>
        {{ $t('network.arbor') }}
      </p>
      <p>
        {{ $t('network.node') }}
      </p>
    </figcaption>
  </figure>
</template>
