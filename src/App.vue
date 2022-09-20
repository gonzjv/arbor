<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavigationBar from './components/NavigationBar.vue';
import AboutPlatform from './components/AboutPlatform.vue';
import Advantages from './components/Advantages.vue';
import Ecosystem from './components/Ecosystem.vue';
import AboutUs from './components/AboutUs.vue';
import Partners from './components/Partners.vue';
import Statistics from './components/Statistics.vue';
import Network from './components/Network.vue';
import SocialNetworks from './components/SocialNetworks.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="md:w-[1440px] overflow-hidden">
    <NavigationBar />
    <AboutPlatform />
    <Advantages />
    <Ecosystem />
    <AboutUs />
    <Partners />
    <Statistics />
    <Network />
    <SocialNetworks />
    <Footer />
  </div>
</template>
