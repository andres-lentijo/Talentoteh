let editModal;

document.addEventListener('DOMContentLoaded', () => {
    cargarEventos();
    editModal = new bootstrap.Modal(document.getElementById('editarEventoModal'));
    
    // Configurar el botón de guardar cambios
    document.getElementById('guardarCambios').addEventListener('click', guardarCambios);
});

async function cargarEventos() {
    try {
        const response = await fetch('/api/eventos');
        const eventos = await response.json();
        
        const tbody = document.getElementById('eventosTableBody');
        tbody.innerHTML = '';
        
        eventos.forEach(evento => {
            const fecha = new Date(evento.fecha).toLocaleDateString();
            const row = `
                <tr>
                    <td>${evento.nombre}<br>
                        <small class="text-muted">${evento.correo_electronico}</small>
                    </td>
                    <td>${evento.tipo_evento}</td>
                    <td>${evento.salon}</td>
                    <td>${evento.numero_personas}</td>
                    <td>${fecha}</td>
                    <td>${evento.hora}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="editarEvento(${evento.id}, '${evento.fecha}', '${evento.hora}')">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="eliminarEvento(${evento.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    } catch (error) {
        alert('Error al cargar los eventos');
        console.error(error);
    }
}

function editarEvento(id, fecha, hora) {
    document.getElementById('editEventoId').value = id;
    document.getElementById('editFecha').value = fecha;
    document.getElementById('editHora').value = hora;
    editModal.show();
}

async function guardarCambios() {
    const id = document.getElementById('editEventoId').value;
    const fecha = document.getElementById('editFecha').value;
    const hora = document.getElementById('editHora').value;

    try {
        const response = await fetch(`/api/eventos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fecha, hora })
        });

        if (response.ok) {
            editModal.hide();
            cargarEventos();
            alert('Evento actualizado exitosamente');
        } else {
            alert('Error al actualizar el evento');
        }
    } catch (error) {
        alert('Error al procesar la solicitud');
        console.error(error);
    }
}

async function eliminarEvento(id) {
    if (!confirm('¿Está seguro de que desea eliminar este evento?')) {
        return;
    }

    try {
        const response = await fetch(`/api/eventos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            cargarEventos();
            alert('Evento eliminado exitosamente');
        } else {
            alert('Error al eliminar el evento');
        }
    } catch (error) {
        alert('Error al procesar la solicitud');
        console.error(error);
    }
}