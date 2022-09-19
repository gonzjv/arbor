<script setup>
import aquaWorldImg from '@/assets/aqua-world.png';
import prestigeImg from '@/assets/prestige.png';
import magnetImg from '@/assets/magnet.png';

const partners = [
  {
    img: aquaWorldImg,
    title: 'partners.aquaWorld.title',
    description: 'partners.aquaWorld.description',
  },
  {
    img: prestigeImg,
    title: 'partners.prestige.title',
    description: 'partners.prestige.description',
  },
  {
    img: magnetImg,
    title: 'partners.magnet.title',
    description: 'partners.magnet.description',
  },
];
</script>
<template>
  <section
    class="flex flex-col px-[140px] my-36 gap-10"
  >
    <h2 class="text-5xl text-left">
      {{ $t('partners.header') }}
    </h2>
    <div class="flex gap-5">
      <figure
        class="bg-gray-800 rounded-3xl w-96 h-64 flex flex-col justify-center items-center"
        v-for="partner in partners"
      >
        <div
          class="h-1/2 flex justify-start items-center w-full ml-20"
        >
          <img
            :src="partner.img"
            :alt="$t(partner.title)"
          />
        </div>
        <figcaption
          class="text-left w-72 h-1/2 flex items-start"
        >
          {{ $t(partner.description) }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
