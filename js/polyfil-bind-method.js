console.log('polyfil-bind-method.js loaded');
// Polyfill for Function.prototype.bind

let obj = {
    fname: 'Digbijaya',
    lname: 'Biswal',
    getDetails: function (){
        console.log(this.fname + " " + this.lname);
    }
}

