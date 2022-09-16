<script setup>
import { useI18n } from 'vue-i18n';
import logoImg from './../assets/logo.svg';

const NAV_BUTTONS = [
  'navigation.platform',
  'navigation.advantages',
  'navigation.ecosystem',
];
</script>

<template>
  <header class="flex gap-3 min-w-full h-20">
    <!-- <div>Logo</div> -->
    <img
      :src="logoImg"
      class=""
      alt="Arbor logo"
    />
    <nav class="">
      <ul class="flex gap-5">
        <li v-for="btn in NAV_BUTTONS">
          {{ $t(btn) }}
        </li>
      </ul>
    </nav>
    <form class="">
      <label for="locale-select">{{
        $t('language')
      }}</label>
      <select
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
