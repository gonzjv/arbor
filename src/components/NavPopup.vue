<script setup>
import { XCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  goTo: Function,
  togglePopup: Function,
  navBtns: Array,
  displayPopup: Boolean,
});
</script>
<template>
  <aside
    class="bg-slate-700 bg-opacity-70 p-3 absolute top-24 left-0 flex flex-col w-full"
  >
    <nav
      class="z-10 flex flex-col gap-10 items-center lg:hidden"
    >
      <button @click="togglePopup" class="">
        <XCircleIcon class="h-10" />
      </button>
      <ul class="relative flex flex-col gap-5">
        <li
          :key="nav.title"
          class=""
          v-for="nav in navBtns"
        >
          <button
            class="px-4 relative hover:text-green-400 font-semibold w-full h-full"
            :key="nav.destination"
            @click="props.goTo(nav.destination)"
          >
            {{ $t(nav.title) }}
          </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>
