// Función para alternar entre formularios
function toggleForms(form) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (form === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
}

// Manejar el envío del formulario de login
document.getElementById('loginFormElement').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre_usuario = document.getElementById('loginUsername').value;
    const contrasena = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre_usuario, contrasena })
        });

        const data = await response.json();
        if (response.ok) {
            // Guardar el estado de la sesión
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', nombre_usuario);
            
            // Redirigir a la página de eventos
            window.location.href = '/eventos.html';
        } else {
            alert(data.error || 'Error al iniciar sesión');
        }
    } catch (error) {
        alert('Error al iniciar sesión');
        console.error(error);
    }
});

// Manejar el envío del formulario de registro
document.getElementById('registerFormElement').addEventListener('submit', async (e) => {
    e.preventDefault();
    const correo_electronico = document.getElementById('registerEmail').value;
    const nombre_usuario = document.getElementById('registerUsername').value;
    const contrasena = document.getElementById('registerPassword').value;

    try {
        const response = await fetch('/api/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo_electronico, nombre_usuario, contrasena })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Usuario registrado exitosamente');
            // Limpiar el formulario
            document.getElementById('registerFormElement').reset();
            // Volver al formulario de login
            toggleForms('login');
        } else {
            alert(data.error || 'Error al registrar usuario');
        }
    } catch (error) {
        alert('Error al registrar usuario');
        console.error(error);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video');
    let currentVideo = 0;

    // Función para cambiar videos
    function changeVideo() {
        // Ocultar todos los videos
        videos.forEach(video => {
            video.classList.remove('active');
            video.pause();
        });

        // Mostrar y reproducir el video actual
        videos[currentVideo].classList.add('active');
        videos[currentVideo].play();

        // Preparar el siguiente video
        currentVideo = (currentVideo + 1) % videos.length;
    }

    // Cambiar video cuando termine el actual
    videos.forEach(video => {
        video.addEventListener('ended', changeVideo);
    });

    // Iniciar el primer video
    videos[0].play();
});

// Verificar si hay una sesión activa al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = '/eventos.html';
    }
});