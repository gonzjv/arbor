import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';

import en from './locales/en.json';
import ru from './locales/ru.json';

const app = createApp(App);
const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    ru,
  },
});

app.use(i18n);
app.mount('#app');
