// Variables
const botonMenu = document.getElementById("botonMenu");
const menuMovil = document.getElementById("menuMovil");
const overlay = document.getElementById("overlay");
const hamburguesas = document.querySelectorAll(".hamburguesa");

// Función para toggle del menú
function toggleMenu() {
  menuMovil.classList.toggle("activo");
  overlay.classList.toggle("activo");
  hamburguesas.forEach((hamburguesa) => {
    hamburguesa.classList.toggle("activo");
  });
}

// Event listeners
botonMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Cerrar menú al hacer clic en un enlace
const enlacesMovil = document.querySelectorAll(".lista__enlace--movil");
enlacesMovil.forEach((enlace) => {
  enlace.addEventListener("click", toggleMenu);
});

// Cerrar menú con tecla Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && menuMovil.classList.contains("activo")) {
    toggleMenu();
  }
});

// Prevenir scroll del body cuando el menú está abierto
function toggleBodyScroll() {
  document.body.style.overflow = menuMovil.classList.contains("activo")
    ? "hidden"
    : "auto";
}

// Actualizar el scroll del body cuando se abre/cierra el menú
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      toggleBodyScroll();
    }
  });
});

observer.observe(menuMovil, { attributes: true });
