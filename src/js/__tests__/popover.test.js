import { toggleVisibility, positionPopover } from '../app.js';

describe('toggleVisibility', () => {
  test('should show popover if it is hidden', () => {
    const popover = { style: { display: 'none' } };
    
    toggleVisibility(popover);
    expect(popover.style.display).toBe('block');
  });

  test('should hide popover if it is visible', () => {
    const popover = { style: { display: 'block' } };
    
    toggleVisibility(popover);
    expect(popover.style.display).toBe('none');
  });
});

test('should position popover properly relative to the anchor', () => {
  const popover = document.createElement('div');
  popover.style = {};  // Мокаем объект стилей

  const buttonRect = { top: 100, left: 50, width: 200, height: 40 };

  positionPopover(popover, buttonRect);

  expect(popover.style.top).toBe('95px');  // Пример вывода
  expect(popover.style.left).toBe('50px'); // Пример вывода
});