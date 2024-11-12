document.getElementById('eventoForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        // Datos de persona
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        correo_electronico: document.getElementById('correo').value,
        tipo_documento: document.getElementById('tipoDocumento').value,
        numero_documento: document.getElementById('numeroDocumento').value,
        
        // Datos del evento
        tipo_evento: document.getElementById('tipoEvento').value,
        salon: document.getElementById('salon').value,
        numero_personas: document.getElementById('numeroPersonas').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value
    };

    try {
        const response = await fetch('/api/registro-evento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (response.ok) {
            alert('Evento registrado exitosamente');
            document.getElementById('eventoForm').reset();
        } else {
            alert(data.error || 'Error al registrar el evento');
        }
    } catch (error) {
        alert('Error al procesar la solicitud');
        console.error(error);
    }
});

// Función para cerrar sesión
function cerrarSesion() {
    // Limpiar datos de sesión
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userData');
    
    // Redirigir al login
    window.location.href = '/index.html';
}