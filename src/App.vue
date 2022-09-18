<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavigationBar from './components/NavigationBar.vue';
import AboutPlatform from './components/AboutPlatform.vue';
import Advantages from './components/Advantages.vue';
import Ecosystem from './components/Ecosystem.vue';
</script>

<template>
  <div class="md:w-[1160px]">
    <NavigationBar />
    <AboutPlatform />
    <Advantages />
    <Ecosystem />
  </div>
</template>
