<script setup>
import logoGithub from '@/assets/logo-github.png';
import logoVk from '@/assets/logo-vk.png';
import logoMedium from '@/assets/logo-medium.png';

const SOCIAL_NETWORKS = [
  {
    title: 'VK',
    img: logoVk,
    style:
      'flex justify-center items-center w-1/3 bg-green-400 hover:bg-green-800',
  },
  {
    title: 'Github',
    img: logoGithub,
    style:
      'flex justify-center items-center w-1/3 bg-black hover:bg-white',
  },
  {
    title: 'Medium',
    img: logoMedium,
    style:
      'flex justify-center items-center w-1/3 bg-green-800 hover:bg-green-400',
  },
];
</script>
<template>
  <section class="flex h-[480px]">
    <figure
      v-for="network in SOCIAL_NETWORKS"
      :class="network.style"
    >
      <img
        :src="network.img"
        :alt="network.title"
      />
    </figure>
  </section>
</template>
