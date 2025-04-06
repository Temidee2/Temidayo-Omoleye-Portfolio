// Toggle hamburger menu on small screens
function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("active");
  }
  
  // Typing effect for the hero section
  const typedText = document.getElementById("typed-text");
  const roles = ["Hi, I'm Temidayo Omoleye"];
  let i = 0, j = 0, isDeleting = false;
  
  function type() {
    const currentRole = roles[i];
    if (isDeleting) {
      typedText.textContent = currentRole.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
    } else {
      typedText.textContent = currentRole.substring(0, j++);
      if (j > currentRole.length) {
        isDeleting = true;
      }
    }
    setTimeout(type, isDeleting ? 80 : 150);
  }
  
  type();
  
  // Dark/Light mode toggle is attached to the button in the header
  const toggleBtn = document.getElementById("darkModeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

 