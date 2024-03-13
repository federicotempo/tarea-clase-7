const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } else if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    } else if (!/^[a-z]+$/i.test(nombre)) {
        return 'Este campo solo acepta letras';
    } else {
        return 'Nombre correcto';
    }
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'Este campo no puede estar vacío';
    } else {
        return 'Ciudad correcta';
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } else if (descripcionRegalo.length >= 300){
        return 'Este campo debe tener menos de 300 caracteres';
    } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) { 
        return 'Este campo sólo puede tener letras y números';
    } else {
        return 'Descripcion regalo correcta';
    }
}

function ejecutarValidaciones() {
    validarNombre(nombre);
    validarCiudad(ciudad);
    validarDescripcionRegalo(descripcionRegalo);
}

ejecutarValidaciones();