function initNavToggle()
{
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    if (!header || !toggle) return;

    toggle.addEventListener('click', () => {
        const open = header.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        // toggle.textContent = open ? 'X' : '+';
    });
}
initNavToggle();