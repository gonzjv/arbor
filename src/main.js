import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';

import EN from './locales/en.json';
import RU from './locales/ru.json';

const app = createApp(App);
const i18n = createI18n({
  locale: 'EN',
  messages: {
    EN,
    RU,
  },
});

app.use(i18n);
app.mount('#app');
