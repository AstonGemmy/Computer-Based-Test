require('./bootstrap');
require('alpinejs');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/index'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import Index from './pages/index/Index.vue'
import Authentication from './pages/auth/Authentication.vue'
import Profile from './pages/profile/Profile.vue'
import TestPortal from './pages/test/TestPortal.vue'
import GlobalAlert from './components/common/GlobalAlert.vue'

Vue.component('global-alert', GlobalAlert)
Vue.component('loading-overlay', Loading)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: '/', component: Index},
  {path: '/authenticate', component: Authentication},
  {path: '/profile', component: Profile},
  {path: '/test-portal', component: TestPortal}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router,
  store,
  data() {
    return {
      isLoading: null,
      fullPage: false,
      loader: 'bars'
    }
  },
  updated: () => {
    // this.$nextTick(function () {
      utility();
    // })
  },

  watch: {
    '$store.state.isLoading': function(oldState, newState) {
      this.isLoading = newState
    }
  }
});

const utility = () => {

  //ACCORDION CONTROLLER
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
      accordion.addEventListener('click', () => {
          accordion.classList.toggle('accordion-active');
          const panel = accordion.nextElementSibling;
          if (panel.style.maxHeight) {      
            panel.style.maxHeight = null;
            panel.style.padding = '0px 18px';          
          } else {          
            panel.style.maxHeight = (panel.scrollHeight + 20) + 'px';
            panel.style.padding = '10px 18px';          
          }
      })  
  });
      
  // Button Effect
  const buttons = document.querySelectorAll('.button, button, .ripple-node');

  buttons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
      const target = e.target;
      const rect = target.getBoundingClientRect();
      let ripple = target.querySelector('.ripple');				
      if (ripple) {
        ripple.remove();
      }				
      ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.height = ripple.style.width = Math.max(rect.width/3, rect.height/3) + 'px';
      target.appendChild(ripple);
      const top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop;
      const left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft;
      ripple.style.top = top + 'px';
      ripple.style.left = left + 'px';
      return false;
    })
  });


  // Input fields control
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      const inputLabel = input.previousElementSibling;
      inputLabel.style.top = '-1.5em'
    })
    input.addEventListener('blur', () => {
      const inputLabel = input.previousElementSibling;
      inputLabel.style.top = '0em'
    })
  })

}

utility();