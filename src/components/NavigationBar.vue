<script setup>
import logoImg from './../assets/logo.svg';

const navBtns = [
  'platfrom',
  'advantages',
  'ecosystem',
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
        <li v-for="btn in navBtns">{{ btn }}</li>
      </ul>
    </nav>
  </header>
</template>
