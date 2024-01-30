<template>
  <div id="app">
    <header>
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">Formulario</b-nav-item>

          </b-navbar-nav>
        </b-navbar>
      </div>
    </header>

    <main>
      <!-- <form>

        <div class="mt-5">
        <h1 class="text-center">Validacion de Formulario</h1>
        <h3 class="text-align bg-success">Completa el formulario</h3>                                            
      </div>

      <div>
        <div class="mt-2">Nombre: {{ text }}</div>
        <b-form-input v-model="text" placeholder="Ingresa tu nombre"></b-form-input>        
      </div>
      <div>
        <div class="mt-2">Apellido Paterno: {{ text }}</div>
        <b-form-input v-model="text" placeholder="Ingresa tu apellido paterno"></b-form-input>        
      </div>
      <div>
        <div class="mt-2">Apellido Materno: {{ text }}</div>
        <b-form-input v-model="text" placeholder="Ingresa tu apellido materno"></b-form-input>        
      </div>
      </form> -->
    
    <br>  
    <h1 class="bg-success text-center">Llene el formulario</h1>

    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">      
      <hr>
      <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" placeholder="Ingresa tu nombre" required ></b-form-input>
      </b-form-group>
      <hr>      
      <b-form-group id="input-group-2" label="Apellido Paterno:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.surname" placeholder="Ingresa tu apellido paterno" required ></b-form-input>
      </b-form-group>
      <hr>    
      <b-form-group id="input-group-3" label="Apellido Materno:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.surname2" placeholder="Ingresa tu apellido materno"  ></b-form-input>
      </b-form-group>            
      <hr>
      <b-form-group id="input-group-4" label="Direccion: " label-for="input-4" description="">
        <b-form-input id="input-4" v-model="form.address" type="address" placeholder="Direccion" required></b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="input-group-5" label="Codigo postal: " label-for="input-5" description="">
        <b-form-input id="input-5" v-model="form.postalcode" type="number" placeholder="Codigo Postal" required></b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="input-group-6" label="Calle: " label-for="input-6" description="">
        <b-form-input id="input-6" v-model="form.street" type="text" placeholder="Calle" required></b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="input-group-7" label="Numero: " label-for="input-7" description="">
        <b-form-input id="input-7" v-model="form.numberStreet" type="number" placeholder="Numero" required></b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="input-group-8" label="Ciudad: " label-for="input-8" description="">
        <b-form-input id="input-8" v-model="form.city" type="text" placeholder="Ciudad" required></b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="input-group-9" label="Fecha de nacimiento: " label-for="input-9" description="">
        <b-form-input id="input-9" v-model="form.birthday" type="text" placeholder="Fecha de nacimiento" required></b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="input-group-10" label="Correo electronico: " label-for="input-10" description="">
        <b-form-input id="input-10" v-model="form.email" type="text" placeholder="Correo electronico" required></b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="input-group-11" label="Numero Telefonico: " label-for="input-11" description="">
        <b-form-input id="input-11" v-model="form.phoneNumber" type="number" placeholder="Numero de telefono" :state="validacion" required></b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="input-group-12" label="Foto: " label-for="input-12" description="" class="file-upload">
        <b-form-file id="input-12" v-model="form.photo" placeholder="Foto" @change="onFileChange" accept=".jpg" required></b-form-file>
      </b-form-group>
      <hr>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
      
    
      <TheWelcome />
    </main>
  </div>
</template>

<!-- <script>
let validar = new Vue ({
    el: '#app',
    data: {
        errors: [],
        name: null,
        secondName: null,
        email: null,
        password: null,
        choice: -1,
        matricula: null,
        submitted: false,
        expression: /\w+@\w+\.+[a-z]/,
        meansTransport: [
            {text:'Autobús', value: 1},
            {text:'Tren', value: 2},
            {text:'Automóvil', value: 3}
        ]
    },
    computed: {
        hasErrors: function(){
            return !!this.errors.length;
        },
        inputVisible() {
            return this.choice == 3;
        }
    },
    methods: {
        checkForm: function(e) {
            this.errors = [];
            this.submitted = true;

            if (this.name && this.secondName && this.email && this.password && this.validateChoice() && this.expression.test(this.email)){
                 return true;                
            }
            
            if (!this.name) this.errors.push('Nombre requerido');
            if (!this.secondName) this.errors.push('Apellido requerido');
            if (!this.email) this.errors.push('Email requerido');
            if (!this.password) this.errors.push('Password requerido');
            if (this.choice == -1) this.errors.push('Medio de transporte requerido');
            if (this.choice == 3 && !this.matricula) this.errors.push('Matrícula requerida');
            if (!this.expresion.test(this.email)) this.errors.push('Formato de email incorrecto')
        },
        validateChoice: function() {
            if (this.choice == -1 || (this.choice == 3 && !this.matricula)) {
                return false;
            }else return true;

        }
    }  
});

</script>-->

<script> 
export default {
    data() {
      return {
        form: {          
          name: '',
          surname:'',
          surname2:'',
          address:'',
          postalcode:'',
          street:'',
          numberStreet:'',
          city:'',
          birthday:'',
          email:'',
          phoneNumber:'',
          photo:'',
        },
        show: true
      }
    },
    methods: {
      
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        //restablecer los valores de nuestro formulario        
        this.form.name = ''
        this.form.surname=''
        this.form.surname2=''
        this.form.address = ''
        this.form.postalcode=''
        this.form.street=''
        this.form.numberStreet=''
        this.form.city=''
        this.form.birthday=''
        this.form.email=''
        this.form.phoneNumber=''
        this.form.photo=''
        // restablecer, es estado de validacion del formulario
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      computed:{
        validacion(){
          return this.form.phoneNumber.length > 4 && this.form.phoneNumber.length<13
        }
      }
      
    }
  }
</script>

<style>
</style>