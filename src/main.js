import { createApp} from 'vue'
import   'animate.css'

import App from './App.vue'
import router from './router';
import VueObserver from 'vue3-observe-visibility2'
const app=createApp(App);
app.use(VueObserver)
app.use(router);
app.mount('#app');
