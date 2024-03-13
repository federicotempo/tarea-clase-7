const $form = document.querySelector('#carta-a-santa');


function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } else if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    } else if (!/^[a-z]+$/i.test(nombre)) {
        return 'Este campo solo acepta letras';
    } else {
        return '';
    }
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'Este campo no puede estar vacío';
    } else {
        return '';
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } else if (descripcionRegalo.length >= 300) {
        return 'Este campo debe tener menos de 300 caracteres';
    } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'Este campo sólo puede tener letras y números';
    } else {
        return '';
    }
}

$form.onsubmit = validarFormulario;

function validarFormulario(event) {
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo
    };

    manejarErrores(errores);

    event.preventDefault();
}

function manejarErrores(errores) {
    errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    if (errorNombre) {
        $form.nombre.className = "error";
    } else {
        $form.nombre.className = "";
    }

    if (errorCiudad) {
        $form.ciudad.className = "error";
    } else {
        $form.ciudad.className = "";
    }

    if (errorDescripcionRegalo) {
        $form["descripcion-regalo"].className = "error";
    } else {
        $form["descripcion-regalo"].className = "";
    }

}