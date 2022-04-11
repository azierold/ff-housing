import { createApp } from "vue";
import Primevue from "primevue/config";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(Primevue);
app.use(router);

app.mount('#app');
