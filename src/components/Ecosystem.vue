<script setup>
import { reactive, toRefs } from 'vue';

let state = reactive({
  projects: [
    {
      title: 'Arbor Family',
      info: 'ecosystem.projects.familyInfo',
      displayInfo: true,
    },
    {
      title: 'Arbor Game',
      info: 'ecosystem.projects.gameInfo',
      displayInfo: false,
    },
    {
      title: 'Arbor Explorer',
      info: 'ecosystem.projects.explorerInfo',
      displayInfo: false,
    },
    {
      title: 'DEX',
      info: 'ecosystem.projects.dexInfo',
      displayInfo: false,
    },
  ],
});

let { projects } = toRefs(state);
</script>
<template>
  <section
    class="h-[1060px] relative flex gap-5 bg-gray-50 text-gray-800 md:px-5 xl:px-[140px]"
  >
    <h2 class="absolute top-32 left-36 text-5xl">
      {{ $t('ecosystem.header') }}
    </h2>
    <p
      class="absolute md:max-w-xs xl:max-w-lg bottom-32 left-36 text-left text-3xl"
    >
      {{ $t('ecosystem.description') }}
    </p>
    <dl
      class="absolute top-10 left-1/2 h-full max-w-sm flex flex-col gap-5 items-start justify-around"
    >
      <div
        @mouseover="item.displayInfo = true"
        @mouseleave="item.displayInfo = false"
        :key="item.title"
        class="opacity-50 hover:opacity-100 h-1/5"
        v-for="item in projects"
      >
        <dt
          class="text-6xl text-green-700 text-left"
        >
          {{ item.title }}
        </dt>
        <dd class="" v-show="item.displayInfo">
          <p
            class="flex justify-center text-left"
          >
            {{ $t(item.info) }}
          </p>
        </dd>
      </div>
    </dl>
  </section>
</template>
