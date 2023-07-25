const urlInput = document.getElementById('urlInput');
const goButton = document.getElementById('goButton');
const webFrame = document.getElementById('webFrame');

function loadURL() {
  const url = urlInput.value.trim();
  if (url === '') return;

  // Check if the URL contains "http://" or "https://"
  const hasProtocol = /^(https?:\/\/)/i.test(url);
  const completeURL = hasProtocol ? url : 'http://' + url;

  webFrame.src = completeURL;
}

goButton.addEventListener('click', loadURL);

urlInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    loadURL();
  }
});

document.addEventListener("mousemove", (event) => {
  const background = document.querySelector(".animated-background");
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  // Adjust the amount of movement by changing the values (e.g., 10)
  const moveX = mouseX / 10;
  const moveY = mouseY / 10;

  background.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
});
