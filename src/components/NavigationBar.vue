<script setup>
import logoImg from '@/assets/logo.svg';
import Circle from './svg/Circle.vue';
import { reactive, toRefs } from 'vue';
import { Bars3Icon } from '@heroicons/vue/24/outline';
import NavPopup from './NavPopup.vue';

const props = defineProps({
  goTo: Function,
});

let state = reactive({
  displayNavPopup: false,
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

let { navBtns, displayNavPopup } = toRefs(state);

const togglePopup = () => {
  state.displayNavPopup = !state.displayNavPopup;
};
</script>

<template>
  <header
    class="sticky top-0 z-10 bg-slate-700 bg-opacity-70 px-2 md:px-10 xl:px-[140px] flex justify-between items-center h-20 md:h-24"
  >
    <NavPopup
      :toggle-popup="togglePopup"
      :display-popup="displayNavPopup"
      :go-to="goTo"
      :nav-btns="navBtns"
      class=""
      v-if="displayNavPopup"
    />
    <section
      class="flex gap-4 items-center min-w-max"
    >
      <img
        :src="logoImg"
        class="w-14 md:w-full"
        alt="Arbor logo"
      />
      <h1
        class="text-lg md:text-2xl font-semibold"
      >
        ARBOR
      </h1>
    </section>
    <nav class="flex gap-4 md:gap-16 lg:hidden">
      <button
        @click="
          displayNavPopup = !displayNavPopup
        "
      >
        <Bars3Icon class="h-10 text-green-400" />
      </button>
    </nav>
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
  </header>
</template>
