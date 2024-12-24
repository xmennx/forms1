const { setupPopover } = require('../app');

describe('Interaction with DOM Test', () => {
  let toggleButton;
  let popover;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="myPopover" style="display: none;"></div>
      <button id="toggleButton"></button>
    `;

    toggleButton = document.getElementById('toggleButton');
    popover = document.getElementById('myPopover');

    Element.prototype.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      left: 200,
      height: 50,
    });

    setupPopover();
  });

  test('Popover becomes visible on button click', () => {
    toggleButton.click();
    expect(popover.style.display).toBe('block');
  });

  test('Popover position is correctly set on button click', () => {
    toggleButton.click();
    expect(popover.style.top).toBe('95px'); // 100 - 50 - 5
  });

  test('Popover left position matches button click position', () => {
    toggleButton.click();
    expect(popover.style.left).toBe('200px');
  });
});
