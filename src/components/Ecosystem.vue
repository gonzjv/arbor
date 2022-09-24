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
  }, 3000)
);
</script>
<template>
  <section
    class="h-[1060px] relative flex gap-5 bg-gray-50 text-gray-800 px-5 xl:px-[140px]"
  >
    <h2
      class="absolute top-16 md:top-32 left-5 md:left-36 text-4xl md:text-5xl"
    >
      {{ $t('ecosystem.header') }}
    </h2>
    <aside
      class="absolute top-96 left-36 max-w-sm text-left text-xl"
    >
      {{
        $t(
          projects.find((el) => el.orderVar == 3)
            .info
        )
      }}
    </aside>
    <p
      class="absolute md:max-w-sm xl:max-w-lg top-28 md:top-60 md:left-1/3 lg:top-3/4 lg:left-36 text-left text-3xl"
    >
      {{ $t('ecosystem.description') }}
    </p>
    <TransitionGroup
      class="absolute top-1/3 lg:top-10 xl:top-0 md:left-1/3 lg:left-1/2 md:h-2/3 lg:h-full max-w-sm xl:max-w-md flex flex-col gap-5 items-start justify-center"
      :css="false"
      tag="dl"
      move-class="transition duration-1000"
      enter-active-class="transition"
      leave-active-class="transition absolute"
      enter-from-class="opacity-0 translate-x-0"
      leave-to-class="opacity-0 translate-x-0"
    >
      <div
        :key="item.title"
        class="max-h-64"
        :class="item.order"
        v-for="item in projects"
      >
        <dt
          class="text-6xl text-green-700 text-left"
          :class="
            item.orderVar !== 3 && 'opacity-50'
          "
        >
          {{ item.title }}
        </dt>
        <dd
          class=""
          v-show="
            item.orderVar == 3 ? true : false
          "
        >
          <p
            class="flex justify-center text-left"
          >
            {{ $t(item.info) }}
          </p>
        </dd>
      </div>
    </TransitionGroup>
  </section>
</template>
