<script setup>
import logoImg from './../assets/logo.svg';
import Circle from './svg/Circle.vue';

const NAV_BUTTONS = [
  'navigation.platform',
  'navigation.advantages',
  'navigation.ecosystem',
  'navigation.partners',
  'navigation.contacts',
];
</script>

<template>
  <header
    class="gap-48 justify-start items-center sm:hidden md:flex md:w-full h-20"
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
      <nav class="">
        <ul
          class="relative flex justify-center gap-1 border-b-green-400 border-b-2 h-10"
        >
          <Circle
            class="absolute -bottom-1.5 -left-1.5"
          />
          <Circle
            class="absolute -bottom-1.5 -right-1.5"
          />
          <li
            class="w-32"
            v-for="btn in NAV_BUTTONS"
          >
            {{ $t(btn) }}
          </li>
        </ul>
      </nav>
      <form class="">
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
