const locales = import.meta.webpackContext('../locales', {
  recursive: false,
  regExp: /(en|hu)\.json$/i,
});
const vuetify = import.meta.webpackContext('vuetify/lib/locale', {
  recursive: false,
  regExp: /(en|hu)\.js$/i,
});
