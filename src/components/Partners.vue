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
  <section>
    <h2>
      {{ $t('partners.header') }}
    </h2>
    <article v-for="partner in partners">
      <figure>
        <img
          :src="partner.img"
          :alt="$t(partner.title)"
        />
        <figcaption>
          {{ $t(partner.description) }}
        </figcaption>
      </figure>
    </article>
  </section>
</template>
