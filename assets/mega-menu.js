document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.secondary-nav__item');
  const panels = document.querySelectorAll('.mega-panel');

  navItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const handle = this.dataset.mega;

      panels.forEach(panel => {
        panel.classList.remove('is-active');
        if (panel.dataset.panel === handle) {
          panel.classList.add('is-active');
        }
      });
    });
  });
});