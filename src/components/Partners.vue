<script setup>
import { reactive, toRefs } from 'vue';
import aquaWorldImg from '@/assets/aqua-world.png';
import prestigeImg from '@/assets/prestige.png';
import magnetImg from '@/assets/magnet.png';

let state = reactive({
  partners: [
    {
      img: aquaWorldImg,
      title: 'partners.aquaWorld.title',
      description:
        'partners.aquaWorld.description',
      displayLines: false,
    },
    {
      img: prestigeImg,
      title: 'partners.prestige.title',
      description:
        'partners.prestige.description',
      displayLines: false,
    },
    {
      img: magnetImg,
      title: 'partners.magnet.title',
      description: 'partners.magnet.description',
      displayLines: false,
    },
  ],
});

const { partners } = toRefs(state);
</script>
<template>
  <section
    class="flex flex-col md:px-5 lg:px-[140px] my-36 gap-10"
  >
    <h2 class="text-5xl text-left">
      {{ $t('partners.header') }}
    </h2>
    <div
      class="md:flex-col lg:flex-row flex gap-5"
    >
      <figure
        @mouseover="partner.displayLines = true"
        @mouseleave="partner.displayLines = false"
        :key="partner.title"
        class="relative bg-gray-800 rounded-3xl lg:w-96 h-64 flex md:flex-row lg:flex-col justify-center items-center md:px-5"
        v-for="partner in partners"
      >
        <div
          v-if="partner.displayLines"
          class="absolute top-0 h-2 shadow-md shadow-green-400/50 rounded-b-md w-1/4 bg-green-400"
        ></div>
        <div
          v-if="partner.displayLines"
          class="absolute bottom-0 h-2 shadow-[0_-4px_6px_-1px_rgba(74,222,128,0.5)] rounded-t-md w-1/4 bg-green-400"
        ></div>
        <div
          class="h-1/2 flex justify-start items-center md:w-1/2 lg:w-full"
        >
          <img
            :src="partner.img"
            :alt="$t(partner.title)"
          />
        </div>
        <figcaption
          class="text-left md:w-1/2 lg:w-72 h-1/2 flex md:items-center lg:items-start"
        >
          {{ $t(partner.description) }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
