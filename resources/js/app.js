/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import VueRouter from 'vue-router'
import { store } from './store/store';
import Vuetify from "../plugins/vuetify"
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(VueRouter);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('home-component', require('./components/HomeComponent.vue').default);
Vue.component('profile-component', require('./components/ProfileComponent.vue').default);
Vue.component('router-component', require('./components/RouterComponent.vue').default);
Vue.component('addcomment-component', require('./components/AddCommentComponent.vue').default);
Vue.component('addpost-component', require('./components/AddPostComponent.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Home from './components/HomeComponent.vue';
import Profile from './components/ProfileComponent.vue';
import Post from './components/PostComponent.vue';
import Example from './components/ExampleComponent.vue';
import Router from './components/RouterComponent.vue';

const routes = [
    {
        path: '/',
        component: Profile
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/feed',
        component: Post
    }
];

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    store: store,
    router: router,
    vuetify: Vuetify
});
