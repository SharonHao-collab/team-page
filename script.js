// Each button controls the fun fact identified by its aria-controls attribute.
document.querySelectorAll('.fact-button').forEach((button) => {
  button.addEventListener('click', () => {
    const fact = document.getElementById(button.getAttribute('aria-controls'));
    if (!fact) return;

    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    fact.hidden = isExpanded;
    button.firstChild.textContent = isExpanded ? 'Show fun fact ' : 'Hide fun fact ';
  });
});
