<script setup>
import { reactive, toRefs, onMounted } from 'vue';

let state = reactive({
  projects: [
    {
      title: 'Arbor Explorer',
      info: 'ecosystem.projects.explorerInfo',
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

onMounted(() =>
  setInterval(() => {
    changeOrder();
  }, 6000)
);
</script>
<template>
  <section
    class="h-[700px] relative flex flex-col items-start gap-5 bg-gray-50 text-gray-800 px-5 xl:px-[140px]"
  >
    <h2
      class="mt-16 md:mt-20 text-4xl md:text-5xl"
    >
      {{ $t('ecosystem.header') }}
    </h2>
    <TransitionGroup
      class="md:h-2/3 lg:h-full w-full flex flex-col gap-5 items-start justify-center"
      :css="false"
      tag="dl"
      move-class="transition duration-1000"
      enter-active-class="transition duration-1000"
      leave-active-class="transition duration-1000 absolute"
      enter-from-class="opacity-0 translate-x-0"
      leave-to-class="opacity-0 translate-x-0"
    >
      <div
        :key="item.title"
        class="max-h-64 w-full flex items-center"
        :class="item.order"
        v-for="item in projects"
      >
        <dt
          class="ml-40 text-6xl text-green-700 text-left order-2"
          :class="
            item.orderVar !== 3 && 'opacity-30'
          "
        >
          {{ item.title }}
        </dt>
        <dd class="w-1/2">
          <Transition
            move-class="transition duration-1000"
            enter-active-class="transition duration-1000"
            leave-active-class="transition duration-1000 absolute w-1/2"
            enter-from-class="opacity-0 translate-x-0"
            leave-to-class="opacity-0 translate-x-0"
          >
            <p
              v-show="
                item.orderVar == 3 ? true : false
              "
              class="flex justify-center text-left text-xl"
            >
              {{ $t(item.info) }}
            </p>
          </Transition>
        </dd>
      </div>
    </TransitionGroup>
  </section>
</template>
