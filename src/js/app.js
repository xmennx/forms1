export function toggleVisibility(popover) {
  const styles = popover.style;
  
  if (styles.display === 'none' || styles.display === '') {
    styles.display = 'block';
  } else {
    styles.display = 'none';
  }
}

export function positionPopover(popover, buttonRect) {
  const styles = popover.style;
  styles.top = `${buttonRect.top - popover.offsetHeight - 5}px`;
  styles.left = `${buttonRect.left}px`;
}