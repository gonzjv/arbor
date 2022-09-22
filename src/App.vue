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
import { ref, onMounted } from 'vue';
import Footer from './components/Footer.vue';

const advantagesElem = ref(null);
const ecosystemElem = ref(null);
const aboutElem = ref(null);
const partnersElem = ref(null);
const contactsElem = ref(null);

const goToChild = (elem) => {
  const elemToGo =
    elem == 'advantagesElem'
      ? advantagesElem
      : elem == 'ecosystemElem'
      ? ecosystemElem
      : elem == 'aboutElem'
      ? aboutElem
      : elem == 'partnersElem'
      ? partnersElem
      : contactsElem;
  console.log('child', elemToGo.value.$el);
  elemToGo.value.$el.scrollIntoView({
    behavior: 'smooth',
  });
};
</script>

<template>
  <div
    class="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
  >
    <NavigationBar :go-to="goToChild" />
    <AboutPlatform />
    <Advantages ref="advantagesElem" />
    <Ecosystem ref="ecosystemElem" />
    <AboutUs ref="aboutElem" />
    <Partners ref="partnersElem" />
    <Statistics />
    <Network />
    <SocialNetworks ref="contactsElem" />
    <Footer />
  </div>
</template>
