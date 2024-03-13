function probarValidarNombre() {
    console.assert(validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío');

    console.assert(validarNombre('ajsdklajsdasjdsdalsjdlkasjdklasjdklasjdskjjkasjdkl') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor que 50 caracteres');

    console.assert(validarNombre('1') === 'Este campo solo acepta letras',
        'Validar nombre no validó que el nombre no tenga solo letras');

    console.assert(validarNombre('Federico') === '',
        'Validar nombre no validó que el nombre sea correcto');
};

function probarValidarCiudad() {
    console.assert(validarCiudad('') === 'Este campo no puede estar vacío',
        'Validar ciudad no validó que la ciudad no sea vacio');

    console.assert(validarCiudad('Buenos Aires') === '',
        'Validar ciudad no validó que la ciudad sea correcta');
}

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descripcion regalo no validó que la descripcion no sea vacío');

    console.assert(validarDescripcionRegalo('ajsdklajsdasjdsdalsjdlkasjdklasjdklasjdskjjkasjdklajsdklajsdasjdsdalsjdlkasjdklasjdklasjdskjjkasjdklajsdklajsdasjdsdalsjdlkasjdklasjdklasjdskjjkasjdklajsdklajsdasjdsdalsjdlkasjdklasjdklasjdskjjkasjdklajsdklajsdasjdsdalsjdlkasjdklasjdklasjdskjjkasjdklajsdklajsdasjdsdalsjdlkasjdklasjdklasjdskjjkasjdkl') === 'Este campo debe tener menos de 300 caracteres',
        'Validar descripcion regalo no validó que la descripcion sea menor que 300 caracteres');

    console.assert(validarDescripcionRegalo('.,.,.,.') === 'Este campo sólo puede tener letras y números',
        'Validar descripcion regalo no validó que el campo sólo puede tener letras y números');

    console.assert(validarDescripcionRegalo('descripcion') === '',
    'Validar descripcion regalo no validó que la descripcion sea correcta');
}        

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();