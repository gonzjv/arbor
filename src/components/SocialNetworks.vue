<script setup>
import logoGithub from '@/assets/logo-github.png';
import logoVk from '@/assets/logo-vk.png';
import logoMedium from '@/assets/logo-medium.png';

const SOCIAL_NETWORKS = [
  {
    title: 'VK',
    img: logoVk,
    link: 'https://vk.com/arborplatform',
    style:
      'flex justify-center items-center w-1/3 bg-green-400 hover:bg-green-800',
  },
  {
    title: 'Github',
    img: logoGithub,
    link: 'https://github.com/Arbor-platform',
    style:
      'flex justify-center items-center w-1/3 bg-black hover:bg-white',
  },
  {
    title: 'Medium',
    img: logoMedium,
    link: 'https://github.com/Arbor-platform',
    style:
      'flex justify-center items-center w-1/3 bg-green-800 hover:bg-green-400',
  },
];
</script>
<template>
  <section class="flex h-[480px]">
    <a
      v-for="network in SOCIAL_NETWORKS"
      :class="network.style"
      :href="network.link"
    >
      <img
        :src="network.img"
        :alt="network.title"
      />
    </a>
  </section>
</template>
