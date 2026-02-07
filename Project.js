
  function toggleMenu(e) {
    e.preventDefault(); // stop page jump
    document.getElementById("dropMenu").classList.toggle("show");
  }

  function closeMenu() {
    document.getElementById("dropMenu").classList.remove("show");
  }