(function() {
  emailjs.init("tEnXNRt8IQNaGWUb5"); // replace with your EmailJS public key
})();

// Attach event listener to the form
window.onload = function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    // Collect form data
    const templateParams = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      mensagem: document.getElementById("mensagem").value
    };

    // Send email using EmailJS
    emailjs.send("service_trntemd", "template_4jfxg3l", templateParams)
      .then(function(response) {
        alert("Mensagem Enviada!");
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
      }, function(error) {
        alert("Erro ao enviar a mensagem.");
        console.error("FAILED...", error);
      });
    
  });
};
