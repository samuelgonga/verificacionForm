import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    data: {
      errors: [],
      name: null,
      age: null,
      movie: null
    },
    methods:{
      checkForm: function (e) {
        if (this.name && this.age) {
          return true;
        }
  
        this.errors = [];
  
        if (!this.name) {
          this.errors.push('El nombre es obligatorio.');
        }
        if (!this.age) {
          this.errors.push('La edad es obligatoria.');
        }
  
        e.preventDefault();
      }
    }
  })

const router = new VueRouter({routes, })
export default router;
    
