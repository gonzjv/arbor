<script setup>
const FOOTER_ELEMENTS = [
  {
    category: 'footer.useGuide.title',
    links: [
      {
        title: 'footer.useGuide.aboutArbor',
        link: '',
      },
      {
        title: 'footer.useGuide.whitePaper',
        link: '',
      },
    ],
  },
  {
    category: 'footer.build.title',
    links: [],
  },
  {
    category: 'footer.ecosystem.title',
    links: [
      {
        title: 'footer.ecosystem.explorer',
        link: '',
      },
      { title: 'footer.ecosystem.dex', link: '' },
    ],
  },
  {
    category: 'footer.support.title',
    links: [
      { title: 'footer.support.faq', link: '' },
      {
        title: 'footer.support.contacts',
        link: '',
      },
    ],
  },
];
</script>
<template>
  <footer
    class="px-5 lg:px-[140px] pt-10 md:pt-36 pb-12 flex flex-col gap-20"
  >
    <dl
      class="flex flex-wrap lg:flex-nowrap gap-x-60 gap-y-20 lg:gap-5 lg:justify-between"
    >
      <div
        class="flex flex-col gap-5 items-start"
        v-for="elem in FOOTER_ELEMENTS"
        :key="elem.category"
      >
        <dt class="text-lg">
          {{ $t(elem.category) }}
        </dt>
        <dd
          v-for="e in elem.links"
          :key="e.title"
        >
          <a
            class="text-2xl underline"
            :href="e.link"
            >{{ $t(e.title) }}</a
          >
        </dd>
      </div>
    </dl>
    <aside
      class="flex flex-wrap gap-5 md:flex-nowrap md:justify-between"
    >
      <div class="flex gap-5">
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
      </div>
      <p>ARBOR , LLC.</p>
      <p class="text-green-400">
        Все права защищены, 18+
      </p>
    </aside>
  </footer>
</template>
