import axios from 'axios';
import { useState } from 'react';

function enviarFormulario(data) {
  const destinatario = 'destinatario@example.com'; // Reemplaza con el email del destinatario
  const asunto = data.subject;
  const mensaje = `Nombre: ${data.name}\n\nEmail: ${data.email}\n\nMensaje: ${data.message}`;

  axios.post('ruta-del-servidor', {
    destinatario,
    asunto,
    mensaje,
  })
    .then((response) => {
      console.log('El correo se envió con éxito');
      // Agrega aquí la lógica para mostrar un mensaje de confirmación al usuario
    })
    .catch((error) => {
      console.error('Error al enviar el correo', error);
      // Agrega aquí la lógica para mostrar un mensaje de error al usuario
    });
}

export function Contact_form() {
  const [datos, setDatos] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    enviarFormulario(datos);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  return (
    
    <>
    <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
      <form
        onSubmit={handleSubmit}
        role="form"
        class="php-email-form"
      >
        <div class="row">
          <div class="form-group col-md-6">
            <label for="name">Nombre</label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              required
              value={datos.name}
              onChange = {handleChange}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="name">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              required
              value={datos.email}
              onChange = {handleChange}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="name">Asunto</label>
          <input
            type="text"
            class="form-control"
            name="subject"
            id="subject"
            required
            value={datos.subject}
            onChange = {handleChange}
          />
        </div>
        <div class="form-group">
          <label for="name">Mensaje</label>
          <textarea
            class="form-control"
            name="message"
            rows="10"
            required
            value={datos.message}
            onChange = {handleChange}
          ></textarea>
        </div>
        <div class="my-3">
          <div class="loading">Enviando</div>
          <div class="error-message"></div>
          <div class="sent-message">
            Su mensaje ha sido enviado correctamente. Gracias!
          </div>
        </div>
        <div class="text-center">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </>

  );
}
