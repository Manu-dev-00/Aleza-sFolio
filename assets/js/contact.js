document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.php-email-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const loading     = form.querySelector('.loading');
    const errorDiv    = form.querySelector('.error-message');
    const successDiv  = form.querySelector('.sent-message');

    // Réinitialiser
    loading.style.display     = 'block';
    errorDiv.style.display    = 'none';
    successDiv.style.display  = 'none';
    errorDiv.textContent      = '';
    successDiv.textContent    = '';

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      loading.style.display = 'none';

      if (data.success) {
        successDiv.textContent  = 'Merci ! Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.';
        successDiv.style.display = 'block';
        form.reset();

      } else {
        errorDiv.textContent  = data.message || 'Erreur, l\'envoi a échoué. Veuillez réessayer ou me contacter directement sur alezaemmanuel05@gmail.com';
        errorDiv.style.display = 'block';
      }
    })
    .catch(() => {
      loading.style.display  = 'none';
      errorDiv.textContent   = 'Erreur de connexion. Veuillez réessayer.';
      errorDiv.style.display = 'block';
    });
  });
});