// Form Validation
function validateForm() {
  const name = document.contactForm.name.value.trim();
  const email = document.contactForm.email.value.trim();
  const messageEl = document.getElementById('form-msg');

  if (!name || !email) {
    messageEl.style.color = "red";
    messageEl.textContent = "❌ Please fill in all fields.";
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messageEl.style.color = "red";
    messageEl.textContent = "❌ Invalid email address.";
    return false;
  }

  messageEl.style.color = "green";
  messageEl.textContent = `✅ Thank you, ${name}! We'll contact you soon.`;
  document.contactForm.reset();
  return false;
}

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle('open');
    document.querySelectorAll('.faq-answer').forEach(a => {
      if (a !== answer) a.classList.remove('open');
    });
  });
});

// Fade-in Animation
document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  fadeIns.forEach(element => observer.observe(element));
});
