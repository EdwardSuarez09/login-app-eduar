document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    const mensaje = document.getElementById('mensaje');

    if (usuario === '' || password === '') {
        mensaje.textContent = 'Por favor, complete todos los campos.';
    } else {
        mensaje.textContent = 'Ingreso exitoso.';
        mensaje.style.color = 'green';
    }
});