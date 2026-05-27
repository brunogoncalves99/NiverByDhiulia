const whatsappButton = document.getElementById('whatsapp-button');
const nameInput = document.getElementById('whatsapp-name');

if (whatsappButton && nameInput) {
  whatsappButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
      alert('Por favor, informe seu nome antes de confirmar.');
      nameInput.focus();
      return;
    }

    const message = encodeURIComponent(`Olá, meu nome ${name} confirmo presença no aniversário da Dhiulia.`);
    const phone = '5534988767441';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

    window.open(whatsappUrl, '_blank');
  });
}