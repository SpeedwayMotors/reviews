// A disclosure with native links, rather than an application-style ARIA menu.
document.querySelectorAll('.catalog-topper').forEach((topper) => {
  const toggle = topper.querySelector('.catalog-topper__toggle');
  const panel = topper.querySelector('.catalog-topper__menu');
  if (!toggle || !panel) return;
  const setOpen = (open, restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(panel.hidden));
  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      panel.querySelector('a')?.focus();
    }
  });
  topper.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      event.preventDefault();
      setOpen(false, true);
    }
  });
  document.addEventListener('click', (event) => {
    if (!topper.querySelector('.catalog-topper__digital').contains(event.target)) setOpen(false);
  });
  topper.querySelector('.catalog-topper__digital').addEventListener('focusout', (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  });
  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false, true);
  });
});
