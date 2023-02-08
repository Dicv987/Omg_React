export function Contact_form() {
  return (
    <>
      <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form
          action="forms/contact.php"
          method="post"
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
            />
          </div>
          <div class="form-group">
            <label for="name">Mensaje</label>
            <textarea
              class="form-control"
              name="message"
              rows="10"
              required
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
