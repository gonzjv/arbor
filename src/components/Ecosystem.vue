<script setup>
import { reactive, toRefs } from 'vue';

let state = reactive({
  projects: [
    {
      title: 'DEX',
      info: 'ecosystem.projects.dexInfo',
      displayInfo: false,
      order: 'order-1',
      orderVar: 1,
      opacity: '50',
    },
    {
      title: 'Arbor Family',
      info: 'ecosystem.projects.familyInfo',
      displayInfo: true,
      order: 'order-2',
      orderVar: 2,
      opacity: '100',
    },
    {
      title: 'Arbor Game',
      info: 'ecosystem.projects.gameInfo',
      displayInfo: false,
      order: 'order-3',
      orderVar: 3,
      opacity: '50',
    },
    {
      title: 'Arbor Explorer',
      info: 'ecosystem.projects.explorerInfo',
      displayInfo: false,
      order: 'order-4',
      orderVar: 4,
      opacity: '50',
    },
    {
      title: 'DEX',
      info: 'ecosystem.projects.dexInfo',
      displayInfo: false,
      order: 'order-5',
      orderVar: 5,
      opacity: '50',
    },
  ],
});

let { projects } = toRefs(state);

const changeOrder = () => {
  projects.value.map((el) => {
    if (el.orderVar !== 5) {
      el.orderVar += 1;
      el.order = 'order-' + el.orderVar;
    } else {
      el.orderVar = 1;
      el.order = 'order-' + 1;
    }
  });
};
</script>
<template>
  <section
    class="h-[1060px] relative flex gap-5 bg-gray-50 text-gray-800 px-5 xl:px-[140px]"
  >
    <button @click="changeOrder">
      Change Order
    </button>
    <h2
      class="absolute top-16 md:top-32 left-5 md:left-36 text-4xl md:text-5xl"
    >
      {{ $t('ecosystem.header') }}
    </h2>
    <p
      class="absolute md:max-w-sm xl:max-w-lg top-28 md:top-60 md:left-1/3 lg:top-3/4 lg:left-36 text-left text-3xl"
    >
      {{ $t('ecosystem.description') }}
    </p>
    <dl
      class="absolute top-1/3 lg:top-10 md:left-1/3 lg:left-1/2 md:h-2/3 lg:h-full max-w-sm flex flex-col gap-5 items-start justify-around"
    >
      <div
        @mouseover="item.displayInfo = true"
        @mouseleave="item.displayInfo = false"
        :key="item.title"
        :class="item.order"
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
