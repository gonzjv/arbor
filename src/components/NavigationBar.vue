<script setup>
import logoImg from '@/assets/logo.svg';
import Circle from './svg/Circle.vue';
import { reactive, toRefs } from 'vue';

const props = defineProps({
  goTo: Function,
});

let state = reactive({
  displayBtn: false,
  navBtns: [
    {
      title: 'navigation.platform',
      destination: 'aboutElem',
      displayDots: false,
    },
    {
      title: 'navigation.advantages',
      destination: 'advantagesElem',
      displayDots: false,
    },
    {
      title: 'navigation.ecosystem',
      destination: 'ecosystemElem',
      displayDots: false,
    },
    {
      title: 'navigation.partners',
      destination: 'partnersElem',
      displayDots: false,
    },
    {
      title: 'navigation.contacts',
      destination: 'contactsElem',
      displayDots: false,
    },
  ],
});

let { navBtns } = toRefs(state);
</script>

<template>
  <header
    class="sticky top-0 z-10 bg-slate-700 bg-opacity-70 md:px-10 xl:px-[140px] max-w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] flex justify-between items-center h-24"
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
      <nav class="block lg:hidden">Burger!!!</nav>
      <nav class="z-10 hidden lg:block">
        <ul
          class="relative flex justify-between h-14"
        >
          <Circle
            class="absolute -bottom-1 -left-1.5"
          />
          <Circle
            class="absolute -bottom-1 -right-1.5"
          />
          <li
            :key="nav.title"
            @mouseover="nav.displayDots = true"
            @mouseleave="nav.displayDots = false"
            class=""
            v-for="nav in navBtns"
          >
            <button
              class="px-4 relative hover:text-green-400 font-semibold w-full h-full"
              :key="nav.destination"
              :class="{
                'border-b-2 border-b-green-400':
                  !nav.displayDots,
                'border-b-2 border-transparent':
                  nav.displayDots,
              }"
              @click="props.goTo(nav.destination)"
            >
              {{ $t(nav.title) }}
              <div
                v-if="nav.displayDots"
                class="absolute -bottom-[1px] left-0 w-full h-2 flex"
              >
                <div
                  class="border-b-2 border-green-400 w-1/3"
                ></div>
                <Circle
                  class="relative -bottom-1 mr-3"
                />
                <Circle
                  class="relative -bottom-1"
                />
                <div
                  class="border-b-2 border-green-400 w-1/2"
                ></div>
              </div>
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
