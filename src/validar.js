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
