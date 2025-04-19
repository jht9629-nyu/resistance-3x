console.log('index.js');

// window mousedown event not recognized
// mousedown event not recognized
window.addEventListener('mousedown', function () {
  console.log('window mousedown');
  // ui_toggleFullScreen();
});

// Uncaught (in promise) TypeError: Permissions check failed
// Wait 10 secs then go full screen
// setTimeout(ui_toggleFullScreen, 10 * 1000);

function ui_toggleFullScreen() {
  if (!document.documentElement.requestFullscreen) {
    console.log('NO document.documentElement.requestFullscreen');
    return;
  }
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener('DOMContentLoaded', doc_ready);

function doc_ready() {
  console.log('DOMContentLoaded');
  // Create a button element
  const fullscreenButton = document.createElement('button');
  set_button_props(fullscreenButton);
  // Add event listener to toggle fullscreen
  fullscreenButton.addEventListener('click', function () {
    if (!document.fullscreenElement) {
      // Request fullscreen
      console.log('requestFullscreen');
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
      // fullscreenButton.innerHTML = 'Exit Fullscreen';
      fullscreenButton.parentNode.removeChild(fullscreenButton);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      // fullscreenButton.innerHTML = 'Toggle Fullscreen';
    }
  });
  // Add button to document body
  document.body.appendChild(fullscreenButton);
}

function set_button_props(fullscreenButton) {
  // Set button properties
  fullscreenButton.innerHTML = 'Toggle Fullscreen';
  fullscreenButton.style.position = 'fixed';
  // fullscreenButton.style.bottom = '20px';
  // fullscreenButton.style.right = '20px';
  fullscreenButton.style.left = '20px';
  fullscreenButton.style.top = '20px';
  fullscreenButton.style.zIndex = '9999';
  fullscreenButton.style.padding = '10px 15px';
  fullscreenButton.style.backgroundColor = '#4285f4';
  fullscreenButton.style.color = 'white';
  fullscreenButton.style.border = 'none';
  fullscreenButton.style.borderRadius = '4px';
  fullscreenButton.style.cursor = 'pointer';
}
