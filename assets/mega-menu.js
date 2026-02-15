document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".secondary-nav__item");
  const panels = document.querySelectorAll(".mega-panel");
  const megaMenu = document.querySelector(".mega-menu");

  if (!navItems.length || !panels.length || !megaMenu) return;

  function showPanel(name) {
    panels.forEach(panel => panel.classList.remove("is-visible"));

    const target = document.querySelector(
      `.mega-panel[data-panel="${name}"]`
    );

    if (target) {
      target.classList.add("is-visible");
      megaMenu.style.display = "block";
    }
  }

  navItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      showPanel(item.dataset.mega);
    });
  });

  megaMenu.addEventListener("mouseleave", () => {
    megaMenu.style.display = "none";
  });
});
