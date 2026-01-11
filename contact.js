document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#aaa";

    emailjs.sendForm(
      "service_jams0gr",   // 👈 replace
      "template_xjr9dfb",  // 👈 replace
      this
    ).then(
      () => {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "rgb(98, 240, 237)";
        form.reset();
      },
      (error) => {
        status.textContent = "❌ Failed to send message. Try again.";
        status.style.color = "tomato";
        console.error(error);
      }
    );
  });
});
