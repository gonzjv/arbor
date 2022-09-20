<script setup>
import logoImg from '@/assets/logo.svg';
import Circle from './svg/Circle.vue';

const props = defineProps({
  goTo: Function,
});

const NAV_BUTTONS = [
  {
    title: 'navigation.platform',
    destination: 'aboutElem',
  },
  {
    title: 'navigation.advantages',
    destination: 'advantagesElem',
  },
  {
    title: 'navigation.ecosystem',
    destination: 'ecosystemElem',
  },
  {
    title: 'navigation.partners',
    destination: 'partnersElem',
  },
  {
    title: 'navigation.contacts',
    destination: 'contactsElem',
  },
];
</script>

<template>
  <header
    class="sticky top-0 z-10 bg-slate-700 bg-opacity-70 px-[140px] md:w-[1440px] gap-48 justify-start items-center sm:hidden md:flex h-24"
  >
    <section
      class="flex gap-4 items-center min-w-max"
    >
      <img
        :src="logoImg"
        class=""
        alt="Arbor logo"
      />
      <h1 class="text-2xl font-semibold">
        ARBOR
      </h1>
    </section>
    <section class="flex gap-16">
      <nav class="z-10">
        <ul
          class="relative flex justify-between gap-10 border-b-green-400 border-b-2 h-14"
        >
          <Circle
            class="absolute -bottom-1 -left-1.5"
          />
          <Circle
            class="absolute -bottom-1 -right-1.5"
          />
          <li class="" v-for="nav in NAV_BUTTONS">
            <button
              class="hover:text-green-400 transition-all w-full h-full"
              @click="props.goTo(nav.destination)"
            >
              {{ $t(nav.title) }}
            </button>
          </li>
        </ul>
      </nav>
      <form class="z-10 flex items-center">
        <label for="locale-select"></label>
        <select
          class="bg-green-800 text-xs rounded-full h-9"
          id="locale-select"
          v-model="$i18n.locale"
        >
          <option
            v-for="locale in $i18n.availableLocales"
            :key="locale"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </form>
    </section>
  </header>
</template>
