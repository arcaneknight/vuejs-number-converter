import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "./registerServiceWorker";
import setupPrimeVue from "./primevueSetup";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const app = createApp(App);

app.use(PrimeVue);

setupPrimeVue(app);

app.mount("#app");
