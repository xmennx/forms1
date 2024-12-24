export function toggleVisibility(popover) {
  if (popover.style.display === 'none' || popover.style.display === '') {
    popover.style.display = 'block';
  } else {
    popover.style.display = 'none';
  }
}

export function positionPopover(popover, buttonRect) {
  popover.style.top = `${buttonRect.top - popover.offsetHeight - 5}px`;
  popover.style.left = `${buttonRect.left}px`;
}

export function setupPopover() {
  const popover = document.getElementById('myPopover');
  const toggleButton = document.getElementById('toggleButton');

  if (!popover || !toggleButton) {
    console.error('Popover or toggle button not found.');
    return;
  }

  toggleVisibility(popover);
  const buttonRect = toggleButton.getBoundingClientRect();
  positionPopover(popover, buttonRect);
}

export default setupPopover;