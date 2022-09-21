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
    class="relative flex gap-5 bg-gray-50 text-gray-800 px-[140px]"
  >
    <div
      class="my-36 flex flex-col items-start w-1/2"
    >
      <h2 class="text-5xl">
        {{ $t('ecosystem.header') }}
      </h2>
      <p class="mt-96 text-left text-3xl">
        {{ $t('ecosystem.description') }}
      </p>
    </div>
    <dl
      class="my-10 ml-20 w-1/2 flex flex-col gap-5 items-start justify-around"
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
